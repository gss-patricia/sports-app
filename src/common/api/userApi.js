import 'whatwg-fetch';

export default class UserApi {
    static getUserPosts (userId) {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json());
    }

    static getAlbumPhotos (albumId) {
        return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => response.json());
    }

    static getUserAlbums (userId) {
        return fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json());
    }

    static getParsedUsers () {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                return Promise.all(
                    users.map(user => Promise.all([
                        UserApi.getUserAlbums(user.id).then(albums => {
                            user.albums = albums;

                            albums.map(album => Promise.all([
                               UserApi.getAlbumPhotos(album.id).then(photos => {
                                    user.photos = photos;
                                })
                            ]));

                        }),
                        UserApi.getUserPosts(user.id).then(posts => {
                            user.posts = posts;
                        })
                    ]))
                ).then(() => {
                    return users;
                });
            })
    }

    static getUsers () {
        return UserApi.getParsedUsers().then(result => result);
    }
}
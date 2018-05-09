import 'whatwg-fetch';

export default class UserApi {
    static getUsers() {
        const URL_TO_FETCH = 'https://jsonplaceholder.typicode.com/users';
        return fetch(URL_TO_FETCH)
            .then(response => response.json())
            .then(result => {
                return result;
            })
            .catch(err => {
                console.error('Users: Failed retrieving information', err);
            });
    }

    static getAlbums() {
        const URL_TO_FETCH = 'https://jsonplaceholder.typicode.com/albums';
        return fetch(URL_TO_FETCH)
            .then(response => response.json())
            .then(result => {
                return result;
            })
            .catch(err => {
                console.error('Albums: Failed retrieving information', err);
            });
    }

    static photos() {
        const URL_TO_FETCH = 'https://jsonplaceholder.typicode.com/photos';
        return fetch(URL_TO_FETCH)
            .then(response => response.json())
            .then(result => {
                return result;
            })
            .catch(err => {
                console.error('Photos: Failed retrieving information', err);
            });
    }
}
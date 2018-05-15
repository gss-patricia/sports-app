import React from 'react';
import PropTypes from 'prop-types';

export default class TableContent extends React.Component {
    render() {
        let userData = this.props.userdata;
        return (
            <table className="table table-responsive">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>City</th>
                    <th>Ride in group</th>
                    <th>Day of the week</th>
                    <th>Posts</th>
                    <th>Albums</th>
                    <th>Photos</th>
                </tr>
                </thead>

                <tbody>
                {
                    userData.map((item, index) =>{
                        return (
                            <tr key={index}>
                                <td>{item.username}</td>
                                <td>{item.name}</td>
                                <td className="text-color-primary">{item.email}</td>
                                <td className="text-color-primary">{item.address ? item.address.city : item.city}</td>
                                <td>...</td>
                                <td>{item.rideingroup ? item.rideingroup.join(', ') : 'n/a'}</td>
                                <td className="text-color-primary">{item.posts ? item.posts.length : 0}</td>
                                <td className="text-color-primary">{item.albums ? item.albums.length : 0}</td>
                                <td>{item.photos ? item.photos.length : 0}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}

TableContent.propTypes = {
  userdata: PropTypes.array.isRequired
};
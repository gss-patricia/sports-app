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
                                <td>{item.email}</td>
                                <td>{item.address.city}</td>
                                <td>...</td>
                                <td>5</td>
                                <td>{item.posts.length}</td>
                                <td>{item.albums.length}</td>
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
import React, { Component } from 'react';
import UserApi from '../common/api/userApi';

class UserDetailPage extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                User Details {this.props.match.params.id}
            </div>
        );
    }
}

export default UserDetailPage;
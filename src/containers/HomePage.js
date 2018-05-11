import React, { Component } from 'react';
import UserApi from '../common/api/userApi';
import TableContent from '../common/components/tableContent';
import Heading from '../common/components/heading';
import Information from '../common/components/information';

class HomePage extends Component {
    constructor (props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount () {
        UserApi.getUsers().then(users => this.setState({users}));
    }

    render () {
        return (
            <div>
                {this.state.users.length > 0  &&
                    <TableContent userdata={this.state.users}/>
                }
                <Heading text="Registration" />
                <Information />
            </div>
        );
    }
}

export default HomePage;
import React, {Component} from 'react';
import UserApi from '../common/api/userApi';
import TableContent from '../common/components/tableContent';
import Heading from '../common/components/heading';
import Information from '../common/components/information';
import Form from '../common/components/form';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
        this.handleFormValue = this.handleFormValue.bind(this);
    }

    componentDidMount() {
        UserApi.getUsers().then(users => this.setState({users}));
    }

    handleFormValue (value) {
        let users = this.state.users;
        users.push(value);
        this.setState({users});
    }

    render() {
        return (
            <div>
                {this.state.users.length > 0 &&
                <div className="table-container">
                    <TableContent userdata={this.state.users}/>
                </div>
                }
                <Heading text="Registration"/>
                <Information />
                <Form handleFormValue={this.handleFormValue} />
            </div>
        );
    }
}

export default HomePage;
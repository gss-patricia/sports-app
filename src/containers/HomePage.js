import React, { Component } from 'react';
import UserApi from '../common/api/userApi';
import TableContent from '../common/components/tableContent';
import Heading from '../common/components/heading';

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
                <div className="information">
                    <div className="information__item">
                        <div className="information__label">Need help?</div>
                        <div className="information__inner">
                            <div className="information__icon">
                                <i class="fas fa-futbol"/>
                            </div>
                            <div className="information__text">
                            <span>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="information__item">
                        <div className="information__label">Why register?</div>
                        <div className="information__inner">
                            <div className="information__icon">
                                <i class="far fa-heart"/>
                            </div>
                            <div className="information__text">
                            <span>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="information__item">
                        <div className="information__label">what people are saying...</div>
                        <div className="information__inner">
                            <div className="information__icon">
                                <i class="far fa-smile"/>
                            </div>
                            <div className="information__text">
                            <span>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
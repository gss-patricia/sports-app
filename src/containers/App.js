import React, {Component} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
//import logo from '../assets/images/logo.svg';
import '../assets/css/main.css';

import HomePage from './HomePage';
import Header from '../common/components/header';
import Breadcrumb from '../common/components/Breadcrumb';
import UserDetailPage from './UserDetailPage';
import Heading from '../common/components/heading';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <Header/>
                    <Breadcrumb/>
                    <div className="painel-info">
                        <div className="painel-info__inner">
                            <div className="painel-info__item">
                                <div className="painel-info__icon">
                                    <i className="fas fa-puzzle-piece"/>
                                </div>
                                <div className="painel-info__labels">
                                    <div className="painel-info__label">Sport type</div>
                                    <div className="painel-info__label painel-info__label--big">Cycling</div>
                                </div>
                            </div>
                            <div className="painel-info__item">
                                <div className="painel-info__icon">
                                    <i className="fas fa-trophy"/>
                                </div>
                                <div className="painel-info__labels">
                                    <div className="painel-info__label">Mode</div>
                                    <div className="painel-info__label painel-info__label--big">Advanced</div>
                                </div>
                            </div>
                            <div className="painel-info__item">
                                <div className="painel-info__icon">
                                    <i className="fas fa-home"/>
                                </div>
                                <div className="painel-info__labels">
                                    <div className="painel-info__label">Route</div>
                                    <div className="painel-info__label painel-info__label--big">30 miles</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Heading text="Users" />
                    <main>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/user/:id" component={UserDetailPage}/>
                        </Switch>
                    </main>
                </div>
            </HashRouter>
        );
    }
}

export default App;

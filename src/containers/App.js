import React, {Component} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
//import logo from '../assets/images/logo.svg';
import '../assets/css/main.css';

import HomePage from './HomePage';
import Header from '../common/components/Header';
import Breadcrumb from '../common/components/Breadcrumb';
import UserDetailPage from './UserDetailPage';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <Header/>
                    <Breadcrumb/>
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

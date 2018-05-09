import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="layout__header">
                <div className="layout__header-row">
                    <img className="matera-logo-image" src="" alt="logotipo"/>
                    <div className="navigation-container">
                        <div className="navigation">
                            <a href="#" className="navigation__link">Support</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

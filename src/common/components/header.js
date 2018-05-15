import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="layout__header">
                <div className="layout__header-row">
                    <div className="layout__header-logo">
                        <i className="fas fa-basketball-ball"/>
                    </div>
                    <div className="layout__header-logotipo">Venturus Sports</div>
                </div>
            </div>
        );
    }
}

import React from 'react';

const Breadcrumb = () => {
    return (
        <div className="breadcrumb">
            <ul className="breadcrumb-list">
                <li className="breadcrumb__item"><i className="fas fa-home"/></li>
                <li className="breadcrumb__item">PageName</li>
                <li className="breadcrumb__item">Breadcrumb</li>
                <li className="breadcrumb__item breadcrumb__item--is-active ">Current page</li>
            </ul>
        </div>
    );
};

export default Breadcrumb;
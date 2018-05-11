import React from 'react';

const Information = () => {
    return (
        <div className="information">
            <div className="information__item">
                <div className="information__label">Need help?</div>
                <div className="information__inner">
                    <div className="information__icon">
                        <i className="fas fa-futbol"/>
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
                        <i className="far fa-heart"/>
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
                        <i className="far fa-smile"/>
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
    );
};

export default Information;

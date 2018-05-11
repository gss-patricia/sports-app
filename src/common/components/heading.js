import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({text}) => {
    return (
        <div className="heading">
            <div className="heading__title">{text}</div>
            <div className="heading__divider" />
        </div>
    );
};

Heading.propTypes = {
    text: PropTypes.string.isRequired
};
export default Heading;

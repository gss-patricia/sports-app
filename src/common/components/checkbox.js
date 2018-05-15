import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',isChecked: false};
        this.handleValue = this.handleValue.bind(this);
    }

    handleValue (event) {
        const target = event.target;
        const value = target.defaultValue;
        this.props.handleCheckboxes(value);
        this.setState({isChecked: !this.state.isChecked});
    }

    render() {
        let isSelected = this.state.isChecked;
        let classSelected = isSelected ? 'checkbox--is-checked' : '';
        return (
            <div className={`checkbox accent ${classSelected}`}
                 ref={this.props.value}>
                <label className="checkbox-layout">
                    <div className="checkbox-inner-container">
                        <input className="checkbox-input hidden"
                               type="checkbox"
                               value={this.props.value}
                               onChange={this.handleValue}
                        />
                        <div className="checkbox-frame"/>
                        <div className="checkbox-background">
                            <svg className="checkbox-checkmark" version="1.1" viewBox="0 0 24 24">
                                <path className="checkbox-checkmark-path" d="M4.1,12.7 9,17.6 20.3,6.3"
                                      fill="none"
                                      stroke="white"/>
                            </svg>
                            <div className="checkbox-mixedmark"/>
                        </div>
                    </div>
                    <span className="checkbox-label">
                        {this.props.label}
                    </span>
                </label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    handleCheckboxes: PropTypes.func.isRequired
};

export default Checkbox;
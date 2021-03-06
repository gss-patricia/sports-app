import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './checkbox';

export default class Form extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            username: '',
            name: '',
            email: '',
            city: '',
            ride: ''
        };
        this.clear = this.clear.bind(this);
        this.handleCheckboxes = this.handleCheckboxes.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
        this.generateCheckboxes = this.generateCheckboxes.bind(this);
        this.selectedCheckboxes = new Set();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let formValues = this.state;
        formValues.rideingroup = [...this.selectedCheckboxes];
        this.props.handleFormValue(formValues);
    }

    clear () {
        this.selectedCheckboxes = {};
        this.setState({username: '',
            name: '',
            email: '',
            city: ''
        });
    }

    generateCheckboxes() {
        const rideInGroup = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return rideInGroup.map((elem, index) => { return (
            <Checkbox key={index} value={elem} label={elem} handleCheckboxes={this.handleCheckboxes} />
        )});
    }

    handleCheckboxes (selectedCheckbox) {
        if (this.selectedCheckboxes.has(selectedCheckbox)) {
            this.selectedCheckboxes.delete(selectedCheckbox);
        } else {
            this.selectedCheckboxes.add(selectedCheckbox);
        }
    }

    handleRadio (event) {
        this.setState({
            ride: event.target.value
        });
    }

    render() {
        return (
            <div className="form">
                <form className="form-container" onSubmit={this.handleSubmit}>
                    <div className="form-left">
                        <div className="form-item">
                            <label>Username</label>
                            <input type="text"
                                   className="form-item__field"
                                   value={this.state.username}
                                   name="username"
                                   onChange={this.handleChange}/>
                        </div>

                        <div className="form-item">
                            <label>Name</label>
                            <input type="text"
                                   className="form-item__field"
                                   name="name"
                                   value={this.state.name}
                                   onChange={this.handleChange}/>
                        </div>

                        <div className="form-item">
                            <label>E-mail</label>
                            <input type="text"
                                   className="form-item__field"
                                   value={this.state.email}
                                   name="email"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="form-item">
                            <input
                                type="submit"
                                value="Save"
                                className="button button__save button--primary"
                            />
                            <button
                                value="Discard"
                                onClick={this.clear}
                                className="button default"
                            >Discard</button>
                        </div>
                    </div>

                    <div className="form-right">
                        <div className="form-item">
                            <label>City</label>
                            <input type="text"
                                   className="form-item__field"
                                   value={this.state.city}
                                   name="city"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="radio-wrapper">
                            <label>Ride in group?</label>
                            <div className="radio-area">
                                <div className={`radio-button ${this.state.ride === "always"? 'radio--is-checked':''}`}>
                                    <div className="radio-container">
                                        <div className="radio-outer-circle"/>
                                        <div className="radio-inner-circle"/>
                                    </div>
                                    <input className="radio-input hidden"
                                           type="radio"
                                           tabIndex="0"
                                           checked={this.state.ride === "always"}
                                           onChange={this.handleRadio}
                                           name="always"/>
                                    <div className="radio-label-content">Always</div>
                                </div>
                                <div className={`radio-button ${this.state.ride === "sometimes"? 'radio--is-checked':''}`}>
                                    <div className="radio-container">
                                        <div className="radio-outer-circle"/>
                                        <div className="radio-inner-circle"/>
                                    </div>
                                    <div className="radio-label-content">Sometimes</div>
                                    <input className="radio-input hidden"
                                           type="radio"
                                           tabIndex="1"
                                           checked={this.state.ride === "sometimes"}
                                           onChange={this.handleRadio}
                                           name="sometimes"/>
                                </div>
                                <div onClick={this.handleRadio} className={`radio-button ${this.state.ride === "never"? 'radio--is-checked':''}`}>
                                    <div className="radio-container">
                                        <div className="radio-outer-circle"/>
                                        <div className="radio-inner-circle"/>
                                    </div>
                                    <input className="radio-input hidden"
                                           type="radio"
                                           tabIndex="2"
                                           checked={this.state.ride === "never"}
                                           onChange={this.handleRadio}
                                           name="never"/>
                                    <div className="radio-label-content">Never</div>
                                </div>
                            </div>
                        </div>

                        <div className="checkbox-container">
                            <label>Days of the week</label>
                            <div className="checkbox-area">
                                {this.generateCheckboxes()}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

Form.propTypes = {
    handleFormValue: PropTypes.func.isRequired
};

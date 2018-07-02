import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import './form.scss';

class TestForm extends Component {
    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component="input" type="text" className="first-name"/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email" />
                </div>
                <div>
                    <label htmlFor="box">Include box</label>                    
                    <Field name="box" component="input" type="checkbox" />
                    <label htmlFor="shipping">Shipping</label>   
                    <Field name="shipping" component="input" type="checkbox" />
                </div>
                <button type="submit" className="first-button" disabled={pristine || submitting}>Submit</button>
            </form>
        );
    }
}

TestForm = reduxForm({
    form: 'test-form'
})(TestForm);

export default TestForm;
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class OtherForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="select-color">Select color</label>
                    <Field name="select-color" component="select">
                        <option value="#ffffff">White</option>
                        <option value="000000">Black</option>
                        <option value="a0a0a0">Grey</option>
                    </Field>
                </div>
                <div>
                    <label htmlFor="box">Include box</label>                    
                    <Field name="box" component="input" type="checkbox" />
                    <label htmlFor="shipping">Shipping</label>   
                    <Field name="shipping" component="input" type="checkbox" />
                </div>
                <button type="submit" className="other-button">Submit</button>
            </form>
        );
    }
}

OtherForm = reduxForm({
    form: 'other-form'
})(OtherForm);

export default OtherForm;
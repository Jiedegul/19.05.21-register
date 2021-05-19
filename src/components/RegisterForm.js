import React from 'react';
import { reduxForm, Field } from 'redux-form';

const RegisterForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label" htmlFor="emailField">Email</label>
                <Field className="form-control" name="email" type="email" component="input" />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="usernameField">Username</label>
                <Field className="form-control" name="username" type="text" component="input" />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="passwordField">Password</label>
                <Field className="form-control" id="passworField" name="Password" type="password" component="input" />
            </div>
            <button className="btn btn-primary mb-3">
                Register
            </button>
        </form>
    );
};

export default reduxForm({ form: "register" })(RegisterForm);
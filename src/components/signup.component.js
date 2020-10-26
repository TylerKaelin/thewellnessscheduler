import React, { Component } from "react";
import EmployerOrEmployeeButton from "./RadioButtonsForSignup";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      employeeOrEmployer: "Employer",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  callbackFunction = (childData) => {
    this.setState({ employeeOrEmployer: childData });
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: [value] });
  };

  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <div className='form-group'>
          <label className='sign-up-page-text'>First name</label>
          <input
            type='text'
            className='form-control'
            placeholder='First name'
            name='firstName'
            onChange={(event) => this.handleChange(event)}
          />
        </div>

        <div className='form-group'>
          <label className='sign-up-page-text'>Last name</label>
          <input
            type='text'
            className='form-control'
            placeholder='Last name'
            name='lastName'
            onChange={(event) => this.handleChange(event)}
          />
        </div>

        <div className='form-group'>
          <label className='sign-up-page-text'>Username</label>
          <input
            type='username'
            className='form-control'
            placeholder='Enter username'
            name='username'
            onChange={(event) => this.handleChange(event)}
          />
        </div>

        <div className='form-group'>
          <label className='sign-up-page-text'>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Enter password'
            name='password'
            onChange={(event) => this.handleChange(event)}
          />
        </div>

        <div>
          <EmployerOrEmployeeButton
            parentCallback={this.callbackFunction}
          ></EmployerOrEmployeeButton>
        </div>

        <button type='submit' className='btn btn-primary btn-block'>
          Sign Up
        </button>
        <p className='forgot-password text-right'>
          Already registered{" "}
          <a className='sign-in-text' href='/sign-in'>
            sign in?
          </a>
        </p>
      </form>
    );
  }
}

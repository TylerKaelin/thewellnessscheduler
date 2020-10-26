import React, { Component } from "react";
import EmployerOrEmployeeButton from "./RadioButtonsForSignup";



export default class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    password: ''
  };

  handleFirstNameChange = (input) => {
    this.state.firstName = input;
    console.log(this.state.firstName);
  };

  handleLastNameChange = (input) => {
    this.state.lastName = input;
    console.log(this.state.lastName);
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
            onChange={(event) => this.handleFirstNameChange(event.target.value)}
          />
        </div>

        <div className='form-group'>
          <label className='sign-up-page-text'>Last name</label>
          <input type='text' className='form-control' placeholder='Last name' onChange={(event) => this.handlelastNameChange(event.target.value)}/>
        </div>

        <div className='form-group'>
          <label className='sign-up-page-text'>Username</label>
          <input
            type='username'
            className='form-control'
            placeholder='Enter username'
          />
        </div>

        <div className='form-group'>
          <label className='sign-up-page-text'>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Enter password'
          />
        </div>

        <div>
          <EmployerOrEmployeeButton></EmployerOrEmployeeButton>
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

import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./Images/logo.jpg";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;

    console.log(event.target.value);
    this.setState({ [key]: [value] });
  }

  render() {
    return (
      <form>
        <img
          src={logo}
          style={{
            height: "20vh",
            display: "block",
            justifycontent: "center",
            alignitems: "center",
            margin: "auto",
          }}
          alt='Logo'
        />
        <h3>Sign In</h3>

        <div className='form-group'>
          <label className='login-page-text'>Username</label>
          <input
            type='username'
            className='form-control'
            placeholder='Enter username'
            name='username'
            onChange={this.handleChange}
          />
        </div>

        <div className='form-group'>
          <label className='login-page-text'>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Enter password'
            name='value'
            onChange={this.handleChange}
          />
        </div>

        <div className='form-group'>
          <div className='custom-control custom-checkbox'>
            <input
              type='checkbox'
              className='custom-control-input'
              id='customCheck1'
            />
            <label className='custom-control-label' htmlFor='customCheck1'>
              Remember me
            </label>
          </div>
        </div>

        <Link to='/employer/Schedule'>
          <button type='submit' className='btn btn-primary btn-block'>
            Submit
          </button>
        </Link>
      </form>
    );
  }
}

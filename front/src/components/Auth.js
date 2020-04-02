import React from 'react';
import useSignUpForm from './authHooks';
import {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Auth = () => {
  const { authUser } = useContext(GlobalContext);

  const Auth = () => {
    alert(`User Created! 
      Name: ${inputs.firstName} ${inputs.lastName}
      Email: ${inputs.email}`);
      authUser('/user/new', inputs.lastName, inputs.email, inputs.password1);
    
  }
  const {inputs, handleInputChange, handleSubmit} = useSignUpForm({firstName: '', lastName: '', email: '', password1: '', password2: ''}, Auth);
  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="field">
                <label className="label has-text-centered">First Name</label>
                <div className="control">
                  <input className="input" type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
                </div>
              </div>
              <div className="field">
                <label className="label has-text-centered">Last Name</label>
                <div className="control">
                  <input className="input" type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
                </div>
              </div>
              <div className="field">
                <label className="label has-text-centered">Email Address</label>
                <div className="control">
                  <input className="input" type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
                </div>
              </div>
              <div className="field">
                <label className="label has-text-centered">Password</label>
                <div className="control">
                  <input className="input" type="password" name="password1" onChange={handleInputChange} value={inputs.password1}/>
                </div>
              </div>
              <div className="field">
                <label className="label has-text-centered">Re-enter Password</label>
                <div className="control">
                  <input className="input" type="password" name="password2" onChange={handleInputChange} value={inputs.password2}/>
                </div>
              </div>
              <button className="button is-block is-fullwidth is-success" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth;
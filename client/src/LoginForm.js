import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
const LoginForm = ({setCurrentUser}) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      
      
    });
  };
 
 
  const handleSubmit = (event) => {
    console.log(formData)
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log(res)
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };

  const history = useHistory("");

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Username:</label>
            <input
              id="name-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="password">Password:</label>
            <input
              id="password-input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
              <br></br>
        <div className="signupPrompt">
            <p>Don't have an Account?</p>
            <button onClick={() => {history.push('/signup')}}>Click Here To Create An Account</button>
            </div>
      </div>
  );


};

export default LoginForm;
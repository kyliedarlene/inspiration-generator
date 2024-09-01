import { UserContext } from "../context/user";

import React, { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password'
YupPassword(yup)

function Signup() {
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);

    console.log(user)

    function login(values) {
        fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        })
        .then((r) => r.json())
        .then((newUser) => {
            console.log(`Logged in ${newUser.username}!`)
            setUser(newUser)
            // navigate('/')
            // think through how redirect will work with saved char in state
                // maybe auto redirect should be in onSubmit, or the right page submitted as param
                // navigate can't happen until user is updated in state
        })
    }

    function signup(values) {
        fetch('/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
            // note to self: did not include replacer or space params for .stringify()
        })
            .then((r) => r.json())
            .then((newUser) => {
                console.log(`Signed up ${newUser.username}!`)
                login(values)
            })
    }
    
    const formSchema = yup.object().shape({
        // improvement: username and email don't show error msg until submit
        username: yup.string().required().min(2).max(20),
        email: yup.string().email().required(),
        password: yup.string().required().password()
    });
    
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: formSchema,
        onSubmit: (values) => signup(values)
    })

      return (
        <div>
          <h1>Signup</h1>
          <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>

            <label htmlFor="username">Username</label>
            <br />
            <input
              id="username"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            <p style={{ color: "red" }}> {formik.errors.username}</p>

            <label htmlFor="email">Email</label>
            <br />
            <input
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <p style={{ color: "red" }}> {formik.errors.email}</p>

            <label htmlFor="password">Password</label>
            <br />
            <input
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <p style={{ color: "red" }}> {formik.errors.password}</p>
            
            <button type="submit">Submit</button>
          </form>
          <p>Already have an account? <Link to='/login'>Log in</Link></p>
        </div>
      );

}



export default Signup;
import { UserContext } from "../context/user";

import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password'
YupPassword(yup)

function Login() {
    const navigate = useNavigate();
    const {user, setUser, login} = useContext(UserContext);

    console.log(user)
    
    const formSchema = yup.object().shape({
        // improvement: username and email don't show error msg until submitted
        email: yup.string().required(),
        password: yup.string().required()
    });
    
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: formSchema,
        onSubmit: (values) => login(values)
    })

      return (
        <div>
          <h1>Login</h1>
          <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>

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
          <p>Don't have an account? <Link to='/signup'>Sign up</Link> to save your favorite characters!</p>
        </div>
      );

}

export default Login;
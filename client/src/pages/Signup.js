import { useFormik } from "formik";
import * as yup from "yup";

function Signup() {

    const formSchema = yup.object().shape({
        username: yup
            .string(),
        email: yup
            .string()
            .email("Invalid email")
            .required("Must enter email"),
        password: yup
            .string()
    });

      const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch('/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(values),
                // note to self: did not include replacer or space params for .stringify()
            })
                .then((r) => r.json())
                .then((data) => console.log(data))
        },
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
            <p style={{ color: "red" }}> {formik.errors.email}</p>

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
        </div>
      );

}



export default Signup;
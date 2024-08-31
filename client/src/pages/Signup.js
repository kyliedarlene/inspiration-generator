import { useFormik } from "formik";
import * as yup from "yup";

function Signup() {

    const formSchema = yup.object().shape({
        email: yup.string().email("Invalid email").required("Must enter email"),
      });

      const formik = useFormik({
        initialValues: {
          email: "",
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            console.log("Submitted")
        },
      });

      return (
        <div>
          <h1>Signup Form</h1>
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
            
            <button type="submit">Submit</button>
          </form>
        </div>
      );

}



export default Signup;
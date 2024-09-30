import { React, useState } from "react";
// import "../../src/GlobalStyle.scss";
import * as Yup from "yup";
import { Apple, Google } from "@mui/icons-material";
import { Button } from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userRegisterAsyncThunk } from "../redux/pagesSlices/authSlice";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const router = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().min(8, "Password must be 8 characters").required("Password is required"),
  });
  const handleSubmit = async (values) => {
    dispatch(
      userRegisterAsyncThunk({
        name: values?.name,
        email: values.email,
        password: values.password,
        cb: () => {
          router("/login");
        },
      })
    );
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="Login_Page">
      <div className="card">
        <div className="main_login">
          <div className="main_logo">
            {/* <img src="/Images/logo.png" className="logo_input"></img> */}
            <img src={require("../images/Logo.png")} className='logo_input' />
            <h4>Welcome to the RPlayer!</h4>
            <p className="sm-text">Please Sign-in to your account and start the adventure</p>
          </div>
          <div className="Login_form">
            {/* <h6>S’INSCRIRE AVEC :</h6>
                    <div className="buttons">
                      <button className="btn_input">
                      <Google />  <span className="ms-2">| GOOGLE </span> 
                      </button>
                      <button className="btn_input">
                      <Apple /> <span className="ms-2">| APPLE </span>  
                      </button>
                    </div>
                    <div className="lines">
                      <div className="hr">
                        <hr />
                      </div>
                      <div className="or">
                        <h6>or</h6>
                      </div>
                      <div className="hr">
                        <hr />
                      </div>
                    </div> */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                {/* <div className="Email_inp"> */}
                <div className="form-label">Name:</div>
                <Field
                  type="text"
                  name="name"
                  className="inp form-control"
                  placeholder="Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  style={{ color: "red" }}
                />
                {/* <input className='inp' type="text" placeholder='Morpheus' /> */}
                {/* </div> */}
                {/* <div className="Email_inp"> */}
                <div className="form-label">Email:</div>
                <Field
                  type="email"
                  name="email"
                  className="inp form-control"
                  placeholder="example@mail.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "red" }}
                />
                {/* <input className='inp' type="text" placeholder='pillulerouge@gmail.com' /> */}
                {/* </div> */}
                {/* <div className="Email_inp"> */}
                <div className="Form-group">
                  <div className="form-label">Password:</div>
                  <Field
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className="inp form-control"
                    placeholder="Enter Password Here"
                  />
                  <Button className="eye-icon" type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                  </Button>
                  <ErrorMessage
                    name="password"
                    component="div"
                    style={{ color: "red" }}
                  />
                </div>
                {/* <input className='inp' type="text" placeholder='Mot de passe' /> */}
                {/* </div> */}
                {/* <div className="border_text">Mot de passe oublié</div> */}
                {/* <div className="login_btn"> */}
                <button type="submit" className="login_btn btn_1 btn-danger">
                  Register
                </button>
                {/* </div> */}
              </Form>
            </Formik>
            <div className="New-account">
              <span>Already have an account?</span>
              {/* <div className="div-26">login</div> */}
              <Link to={"/login"} className="ms-1">
                Log in
              </Link>
            </div>
            {/* <div className="cookie_sec">
                      <Link to={"/cookies"} className="cookie">
                        Cookies
                      </Link>
                      <Link to={"/notice_legale"} className="legale">
                        Légale
                      </Link>
                    </div> */}
          </div>
        </div>

      </div>
    </div>
  );
}

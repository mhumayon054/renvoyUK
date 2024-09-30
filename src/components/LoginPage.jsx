import { React, useState } from "react";
import * as Yup from "yup";
import "../../src/App.scss";
import { Apple, Google } from "@mui/icons-material";
import { Button} from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { userLoginAsyncThunk } from "../redux/pagesSlices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const router = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    dispatch(
      userLoginAsyncThunk({
        email: values?.email,
        password: values?.password,
        cb: () => {
          router("/");
        },
      })
    );
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const googleAuth = () => {
  window.open(`${process.env.REACT_APP_contentBasePath}auth/google`, "_self");
  };

  return (
    <div className="Login_Page">
      <div className="card">
        <div className="main_login">
          <div className="main_logo">
            {/* <img src="/Images/logo.png" className="logo_input"></img> */}
            <img src={require("../images/Logo.png")} className='logo_input' />
            <h2>Welcome to the RPlayer!</h2>
            <p className="sm-text">Please Log-in to your account and start the adventure</p>
          </div>

          <div className="Login_form">
            {/* <h6>se connecter AVEC :</h6>
                    <div className="buttons">
                      <button className="btn_input">
                        <Google /> <span className="ms-2">| GOOGLE </span>
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
                <div className="Form-group">
                    <div className="form-label">Password:</div>
                    <Field
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className="inp form-control"
                      placeholder="Password"
                    />
                    <Button className="eye-icon" type="button" onClick={togglePasswordVisibility}>
                      {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                    </Button>
                    <ErrorMessage
                      name="password"
                      component="div"
                      style={{ color: "red" }}
                    />
                  {/* <input className='inp' type="text" placeholder='Mot de passe' /> */}
                </div>
                {/* <div className="border_text">Mot de passe oublié</div> */}
                {/* <div className="login_btn"> */}
                <button type="submit" className="login_btn btn_1 btn-danger">
                  Login
                </button>
                {/* </div> */}
              </Form>
            </Formik>
            <div className="lines">
              <div className="hr">
                <hr />
              </div>
              <div className="text">
                <h6>OR</h6>
              </div>
              <div className="hr">
                <hr />
              </div>
            </div>

            <div className='Googles-btn'>
              <Button 
              onClick={googleAuth}
              ><Google /></Button>
              {/* <Button><Apple /></Button> */}
            </div>




            <div className="New-account">
              <span>Need an account?</span>
              {/* <div className="div-26">Besoin de créer un compte ?</div> */}
              <Link to={"/signup"} className="ms-1">
                Sign up
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

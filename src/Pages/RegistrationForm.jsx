import React from 'react'
import logo from '../assets/images/image 1.png';
import email from '../assets/images/ic_outline-email.png';
import apple from '../assets/images/ic_outline-apple.png';
import facebook from '../assets/images/Group 5.png';
import google from '../assets/images/Group.png';
import { FaArrowRight } from "react-icons/fa6";


const RegistrationForm = () => {
    return (
        <>

            <div className='bg-image'>
                <div className='container'>
                    <div className='form-wrapper'>
                        <div className='form-logo'>
                            <img src={logo} alt='Logo' />
                        </div>
                        <div className='form-title'>
                            <p>Create a ReEnvoy account</p>
                        </div>

                        <div className='signup-fields'>
                            <div className='field-wrapper'>
                                <div className='field-logo'>
                                    <img src={email} alt='email' />
                                </div>
                                <p>Sign Up with email</p>
                            </div>

                            <div className='field-wrapper'>
                                <div className='field-logo'>
                                    <img src={apple} alt='email' />
                                </div>
                                <p>Sign Up with apple</p>
                            </div>

                            <div className='field-wrapper'>
                                <div className='field-logo'>
                                    <img src={facebook} alt='email' />
                                </div>
                                <p>Continue with Facebook</p>
                            </div>

                            <div className='field-wrapper-1'>
                                <div className='field-logo'>
                                    <img src={google} alt='email' />
                                </div>
                                <p>Continue with Google</p>
                            </div>
                        </div>

                        <div className='signup-btn'>
                            <p>Already have a account? <span >Sign up <FaArrowRight />
                            </span></p>
                        </div>

                        <div className='privacy-text'>
                            <p>By Proceeding , you agree to the <span>Terms and Condition</span> <br></br> and <span>Private Policy</span></p>
                        </div>

                        <div className='btn-sec'>
                            <button>Help</button>
                            <button>Privacy</button>
                            <button>terms</button>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default RegistrationForm

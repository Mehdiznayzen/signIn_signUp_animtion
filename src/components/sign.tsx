import React, { useState } from 'react'
import { BsFacebook , BsLinkedin} from 'react-icons/bs'
import { FaGooglePlusG } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './style.css'

function Sign() {
    const [sign, setSign] = useState(true)
    return (
        <section className=''>
            <div className="row bg-white">
                {/* Code html de la partie de creer les comptes */}
                <div style={{position:'relative', left:`${sign ? `0px` : '672px'}`, borderRadius:`${sign ? ' 30px 0px 0px 30px' : ' 0px 30px 30px 0px'}`}} className={sign ? "sign-in col-lg-6 col-md-8 col-sm-12" : "sign-in col-lg-6 col-md-8 col-sm-12"}>
                    
                    <div className="title">
                        <h2>{sign ? `Sign in` : `Create Account`}</h2>
                    </div>

                    <div className="social-media d-flex">
                        <div className="container-icon">
                            <BsFacebook className='icon-sign-in'/>
                        </div>
                        <div className="container-icon">
                            <FaGooglePlusG className='icon-sign-in'/>
                        </div>
                        <div className="container-icon">
                            <BsLinkedin className='icon-sign-in'/>
                        </div>
                    </div>

                    <p>{sign ? `Or use your account` : `or use your email for registration`}</p>

                    {
                        sign ? 
                        <div className='inputs-1'>
                            <input type="text" className='input-form form-control' placeholder='Email' name="" id="email" />
                            <input type="text" className='input-form form-control' placeholder='Password' name="" id="mdp" />
                        </div>
                        :
                        <div className='inputs-2'>
                            <input type="text" placeholder='Name' className='form-control' name="" id="name" />
                            <input type='email' className='input-form form-control' placeholder='Email' id='email'/>
                            <input type="text" className='input-form form-control' placeholder='Password' name="" id="mdp" />
                        </div>
                    }

                    {
                        sign ? <a href="" className='nav-link'>Forgot your password ?</a> : <></>
                    }

                    <button className='last-btn'>{sign ? `Sign in` : `Sign Up`}</button>
                </div>

                {/* Code html de la partie de la salutation */}
                <div id='salutation' style={{position:'relative', right : `${sign ? '0px' : '675px'}`, borderRadius:`${sign ? '0px 30px 30px 0px' : '30px 0px 0px 30px'}`}} className={sign ? "salutation col-lg-6 col-md-8 col-sm-12" : "sign-in col-lg-6 col-md-8 col-sm-12"}>
                    <h2>{sign ? `Hello Friend !` : `Welcome Back!`}</h2>
                    <p>{sign ? `Enter your personal details and start journey with us` : `To keep connected with us please login with your personal info`}</p>
                    <button onClick={() => setSign(!sign)}>{sign ? `Sign up` : 'Sign in'}</button>
                </div>
            </div>
        </section>
    )
}

export default Sign

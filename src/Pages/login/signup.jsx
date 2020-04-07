import React, { useState } from 'react';
import Firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { GoogleLogin } from 'react-google-login';
import GitHubLogin from 'react-github-login';
import logo from '../../images/logo.svg';
import m from '../../images/ss.png';
import './login.css';
import { useEffect } from 'react';

function Signup() {
    const [signin, setsignin] = useState(false);
    const uiconfig = {
        signInFlow: "popup",
        signInOptions: [
            Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            Firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        callbacks: { signInSuccess: () => false }
    }
    useEffect(() => {
        Firebase.auth().onAuthStateChanged(user => {
            setsignin(!signin);
        })
    })
    return (<div className="loginpage">
        <div className="se">
            <div className="title">
                <div className="margin">
                    <img src={logo} className="images" alt="Logo of ApiFlash, the website screenshot API"></img>
                    <span className="font-weight-light">API</span><b className="ml-1">FLASH</b>
                </div>
            </div>
            <div className="formsetup">
                <div className="forms">
                    <form>
                        <div className="formlabel">
                            <label htmlFor="name">Username</label>
                            <input className="inputset" type="text" name="name" placeholder="name"></input>
                        </div>
                        <div className="formlabel">
                            <label htmlFor="email">Email Address</label>
                            <input className="inputset" type="email" name="email" placeholder="email"></input>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input className="inputset" type="password" name="password" placeholder="password"></input>
                        </div>
                        <div className="text-right">
                            <a href="/reset">Forgot password?</a>
                        </div>
                        <input type="submit" className="submitbtn" value="Log in"></input>
                        <div className="smallset">
                            or signup with
                    </div>
                        <div className="btnsign">
                            {/* <GitHubLogin clientId="05a8084e58b2f566891e"
                            onSuccess={onSuccess}
                            onFailure={onFailure} /> */}
                            <StyledFirebaseAuth uiConfig={uiconfig}
                                irebaseAuth={Firebase.auth()}></StyledFirebaseAuth>
                            <a className="btn-dark af-icon" href="/oauth/github/login?next=">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                    <path fill="currentColor"
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                    </path>
                                </svg>
                                <span className="ml-2">Github</span>
                            </a>
                            <a className="btn-danger af-icon" href="/oauth/google/login?next=">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                    <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                                    </path>
                                </svg>
                                <span className="ml-2">Google</span>
                            </a>
                            {/* <GoogleLogin
                            clientId="4onwndowndwnidowkdnoi"
                            render={renderProps => (
                                }
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        /> */}
                            {/* <a className="btn-danger af-icon" href="/oauth/google/login?next=">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                                </path>
                            </svg>
                            <span class="ml-2">Google</span>
                        </a> */}
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    have an ApiFlash Account?
    <a href="/login">
                        Login.
    </a>
                </div>
            </div>

        </div>
        <div className="message">
            <img src={m}></img>
        </div>
    </div>)
}
export default Signup;
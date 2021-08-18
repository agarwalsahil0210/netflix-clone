import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Background from "./Background";
import "../styles/login.css";
import Fotter from "./Fotter";
import { auth, provider } from "../firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log("error", error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const signUp = () => {
    console.log(`Email ${email} and passswoed ${password}`);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div>
      <Background>
        <Container>
          <div className='container-signin'>
            <div>
              <h1>Sign In</h1>
            </div>
            <div className='form'>
              <div>
                <input
                  value={email}
                  type='email'
                  placeholder='Email address'
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type='password'
                  placeholder='Password'
                />
              </div>
              <div>
                <button onClick={signIn} className='button'>
                  Sign In
                </button>
              </div>
              <div>
                New to Netflix? <a href=''> Sign up now</a> . This page is
                protected by Google reCAPTCHA to ensure you're not a bot. Learn
                more.
              </div>
            </div>
          </div>
        </Container>
      </Background>
      <Fotter></Fotter>
    </div>
  );
};

export default Login;
const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  max-width: 40em;
  width: 100%;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.75);
  height: 70vh;
  justify-content: center;
  align-items: center;
`;

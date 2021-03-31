import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {
  const signIn = e => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch(error => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1cec3ab-18e2-4db8-a5b6-0e2723694736/d41p056-e91724bb-2ca7-4929-ac60-b1d6919278ed.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZDFjZWMzYWItMThlMi00ZGI4LWE1YjYtMGUyNzIzNjk0NzM2XC9kNDFwMDU2LWU5MTcyNGJiLTJjYTctNDkyOS1hYzYwLWIxZDY5MTkyNzhlZC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Io5Y3C0ybFiHhYf5kkgGRH1jR3HMB0ixX1NXjJyLkGI'
          alt=''
        />
        <h1>Sign In</h1>
        <p>Slack +  MAL</p>

        <Button onClick={signIn}>
          Google Sign In
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f2f2f2;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12)
  , 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
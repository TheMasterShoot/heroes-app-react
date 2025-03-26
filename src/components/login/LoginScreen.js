import React from 'react'
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // history.replace('*')
    // console.log(props)
    navigate("*", { replace: true });
  }

  return (
    <div className='container mt-5'>
        <h1>LoginScreen</h1>

        <button
            className='btn btn-primary'
            onClick={ handleLogin }
        >
          Login
        </button>
    </div>
  )
}

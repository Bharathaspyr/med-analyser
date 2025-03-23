import React from 'react'
import { useNavigate } from 'react-router-dom'

const ConfirmEmail = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Email Confirmation Required</h2>
      <p>Please check your email and click on the confirmation link.</p>
      <p>Once confirmed, you can log in.</p>
      <button onClick={() => navigate("/login")}>Go to Login</button>
    </div>
  )
}

export default ConfirmEmail


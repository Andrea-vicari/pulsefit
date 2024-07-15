import React from 'react'
import LoginImg from "../assets/images/LoginImg.jpg"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLogin } from "../hooks/useLogin";
import { useState } from "react";

function Login() {
    // Dark Theme logics
    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType, buttonType;
    themeType == "ligth" ? bgType = "bg-body-secondary" : bgType = "bg-black"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
    themeType == "ligth" ? buttonType = "btn-outline-dark" : buttonType = "btn-outline-light"

    // Submit functions
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, isLoading, error} = useLogin()

    const handleSubmit = async (e) => {
      e.preventDefault()
      await login(email,password)
    }


  return (
    <React.Fragment>
        <section className={"light-typo py-5 call-to-action"+ " " + bgType + " " + textType}>

        <div className="container-fluid px-5">
          <div className='container py-5'>
            <div className="row d-flex align-items-center">
              <div className="col-sm-6">
                      <img className="img-fluid rounded-4" src={LoginImg} alt=""/>
              </div>
              <div className="col-sm-6">
                <h1 className='text-primary text-uppercase'>Benvenuti!</h1>
                <p>Nam id felis eu felis consequat adipiscing. Suspendisse sit amet faucibus nunc, dignissim vehicula enim. Vestibulum luctus turpis sit amet varius venenatis.</p>
                <div className={"w-75" + textType}>
                  <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                      <label htmlFor="email">
                        <strong>Email *</strong>
                      </label>
                      <input
                        type="email"
                        placeholder="Insert Email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email">
                        <strong>Password *</strong>
                      </label>
                      <input
                        type="password"
                        placeholder="Insert Password"
                        name="password"
                        className="form-control rounded-0"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </div>
                    <button type="submit" className="btn btn-danger w-100 rounded-0 mt-3" disabled={isLoading}>
                      Login
                    </button>
                    {error && <div className="error text-danger fs-4 mt-3">{error}</div>}
                  </form>
                  <p className="mt-5">Don't have an account?</p>
                  <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Register
                  </Link>
                  <p className="mt-5">Lost the password?</p>
                  <Link to="/resetpassword" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Reset password
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>

    </section>
    </React.Fragment>
  )
}

export default Login

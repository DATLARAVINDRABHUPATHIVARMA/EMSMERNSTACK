import React from "react";

const Login = () => {
    return(
        <div>
            <h1> Employee Management System </h1>
            <form>
                <h2>Login</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="********"/>
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
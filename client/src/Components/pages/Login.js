import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"

const Login = () => {
    const navigate = useNavigate()
  

    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const data = JSON.stringify({ userName, password })
    const login = () => {
        // console.log(data)
        let obj = {
            method: "POST",
            headers: {
                // "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: data
        }

        fetch("http://localhost:3001/login", obj).then((result) => result.json()).then((res) => {

            if (res) {
                alert(res.msg)

                // console.log(res.msg)
                localStorage.setItem('_id', res.data._id)
                localStorage.setItem('x-api-key', res.data.token)

                navigate('/getMember')

            }
        })
    }

    return (

        <>
            
            <form className='login' onSubmit={(e) => e.preventDefault()}>
                <h1> Welcome to login page</h1>
                <input className='name' type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} /><br /><br />
                <input className='name' type="password" placeholder="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                <button className='loginbtn' type=' button' onClick={login}>login</button><br /><br />

            </form>
        </>

    )
}


export default Login
import React, { useState } from 'react'
// import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import "./signup.css"
const Signup = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [gender, setGender] = useState()
    const [password, setPassword] = useState()


    let data = JSON.stringify({ name, email, phone, gender, password })
    // console.log(data)

const navigate = useNavigate()
    const FormSubmit = () => {
      
        const reqOption = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                
            },
            body: data
        }

        const reqOptionM = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "x-api-key": localStorage.getItem("x-api-key")
            },
            body: data
        }
        let login = localStorage.getItem("_id")
        // console.log(login)
        if(login){
            // console.log(data)
            fetch("http://localhost:3001/registerMember", reqOptionM)
            .then(result => result.json())
            .then(res => {
                alert(res.msg)
                console.log(res.status)
                if(res.status === true){
                    navigate("/getMember")
                }else if(res.msg==="You are not admin"){
                    navigate("/")
                }
               
            }).catch((err)=>{
                console.log(err)
            })
          

        }else{
            fetch("http://localhost:3001/admin", reqOption)
            .then(result => result.json())
            .then(res => {
                alert(res.msg)
                if(res){
                    navigate("/login")
                    // console.log(res)
                }
            })
        }
        
       

    }






    return (
        <>
            <form className='form-control' onSubmit={(e) => e.preventDefault()}>
                <h1>Welcome to signup page </h1>
                <div className='form-input'>
                    <input className='name' type="text" placeholder="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br /><br />
                    <input className='name' type="text" placeholder="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /><br />
                    <input className='name' type="text" placeholder="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} /> <br /><br />
                    <input className='name' type="text" placeholder="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} /> <br /><br />
                    <input className='name' type="password" placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br /><br />
                    <div className='btn'>
                        <button className='signup' type='button' onClick={FormSubmit} >Submit </button> <br /><br />
                        <button className='signup' > <Link to='/login'>login</Link>   </button>
                    </div>
                </div>
            </form>

        </>

    )
}

export default Signup
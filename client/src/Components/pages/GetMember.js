import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./getMember.css"
import { NavLink } from 'react-router-dom'

const GetMember = () => {
    const [data, setData] = useState([])
    const [count, setCount] =useState(0)
    
   

    useEffect(() => {
        axios.get(`http://localhost:3001/getMember/${_id}`,
        { headers:{
         "x-api-key": localStorage.getItem("x-api-key")}}
         
         ).then((res) => {
             // console.log(res.data.data)
             let result =res.data.data
 
             // console.log(result)
             setData(result)
             setCount(result.length)
            
         })
        // getReq()
    },[])

    // console.log(data)
    let _id = localStorage.getItem("_id")
   

    const Delete = (memberId) => {
        alert("Do you want to delete?")
        axios.delete(`http://localhost:3001/delete/${memberId}`, {
           
            headers:{
                "x-api-key": localStorage.getItem("x-api-key")
            }
        }
        ).then((res) => {
               
                window.location.reload()
            })
        
     }


  


    return (

        <>
            <h1>Welcome to mebmers page</h1>
            <div className='add-button'> 
            <h2> Number of members = {count} </h2>
            <button id='new' type='button'> <NavLink to ="/signup" >Add new Member</NavLink></button>
            </div>
            <div >
                <table border="1">


                    <thead>
                        <tr>
                            <td>S No.</td>
                            <td> memberId</td>
                            <td> name</td>
                            <td> email</td>
                            <td> gender</td>
                            <td>operations</td>
                        </tr>
                    </thead>

                    <tbody>



                        {
                            data.map((item, i) =>
                                <tr key={i}>
                                    <td>{i}</td>
                                    <td>{item.memberId}</td>
                                    <td> {item.name}</td>
                                    <td> {item.email}</td>
                                    <td> {item.gender}</td>
                                    <td><button onClick={() => Delete(item.memberId)}>Delete </button></td>
                                   
                                </tr>


                            )
                        }
                    </tbody>
                </table>
            </div>

            
        </>

    )
}

export default GetMember

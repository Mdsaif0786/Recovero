import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Procted = (props) => {
    // let component = props.component
    const component = props.component
    const navigate = useNavigate()
        useEffect(()=>{
            const login = localStorage.getItem('_id')
            console.log(login)
            if(!login){
                alert("Please login to access this page")
                navigate('/login')
            }
        })

  return (
    <div>
        {component}


    </div>
  )
}

export default Procted
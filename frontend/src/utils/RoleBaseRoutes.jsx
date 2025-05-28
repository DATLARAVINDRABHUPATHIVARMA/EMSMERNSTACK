import React from 'react'
import { useAuth } from '../Context/authContext.jsx'
import { Navigate } from 'react-router-dom'

const RoleBaseRoutes = ({children, requiredWebRole}) => {
    const {user, loading} = useAuth()

    if(loading){
        return <div>Loading...</div>
    }

    if(!requiredWebRole.includes(user.webRole))  {
         <Navigate to="/unauthorized" />
    }

    return user ? children : <Navigate to='/login'/>
}

export default RoleBaseRoutes

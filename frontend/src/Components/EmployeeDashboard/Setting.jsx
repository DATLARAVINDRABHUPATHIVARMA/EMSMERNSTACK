import React, {useState} from 'react';
import axiosInstance from "../utils/api"

import { useNavigate } from "react-router-dom"
import { useAuth } from '../../Context/AuthContext';

const Setting = () => {
  const navigate = useNavigate()
  const {user} = useAuth()
  const [setting, setSetting] = useState({
    userId: user._id, oldPassword: "", newPassword: "", confirmPassword: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setSetting({...setting, [name]: value});
  }
  
  return (
    <div>Setting</div>
  )
}

export default Setting
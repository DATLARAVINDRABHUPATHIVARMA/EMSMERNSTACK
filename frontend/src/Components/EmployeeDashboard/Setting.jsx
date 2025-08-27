import React, {useState} from 'react';
import axios from "axios"
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom"
import { useAuth } from '../../Context/AuthContext';

const Setting = () => {
  const navigate = useNavigate()
  const {user} = useAuth()
  const [setting, setSetting] = useState({
    userId: user._id, oldPassword: "", newPassword: "", confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const toggleVisibility = () => setVisiblePassword(!visiblePassword);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setSetting({...setting, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (setting.newPassword !== setting.confirmPassword) {
      setError("Password not matched");
    } else {
      try {
        const response = await axios.put("http://localhost:5000/api/setting/change-password", setting, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        if (response.data.success) {
        navigate("/-dashboard/employees");
         setError("")
      }
      } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
    }
  }
  
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <h2 className='text-2xl font-bold mb-6'>Change Password</h2>
      <p className="text-red-500">{error}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="text-sm font-medium text-gray-700">Old Password</label>
          <div className="relative flex justify-between">
            <input type={visiblePassword ? "text" : "password"} name='oldPassword' onChange={handleChange} placeholder='Change Password' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required/>
            <button type="button" onClick={toggleVisibility} className="absolute inset-y-0 right-0 px-2 py-2 text-grey-500 hover:text-purple-500 transition-colors duration-100">
              {" "}{visiblePassword ? ( <IoMdEye size={24} /> ) : ( <IoMdEyeOff size={24} /> )}
            </button>
          </div>
        </div>
        <div> 
          <label className="text-sm font-medium text-gray-700">New Password</label>
          <div className="relative flex justify-between">
            <input type={visiblePassword ? "text" : "password"} name='newPassword' onChange={handleChange} placeholder='New Password' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required/>
            <button type="button" onClick={toggleVisibility} className="absolute inset-y-0 right-0 px-2 py-2 text-grey-500 hover:text-purple-500 transition-colors duration-100">
              {" "}{visiblePassword ? ( <IoMdEye size={24} /> ) : ( <IoMdEyeOff size={24} /> )}
            </button>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Confirm Password</label>
          <div className="relative flex justify-between">
            <input type={visiblePassword ? "text" : "password"} name='confirmPassword' onChange={handleChange} placeholder='Confirm Password' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required/>
            <button type="button" onClick={toggleVisibility} className="absolute inset-y-0 right-0 px-2 py-2 text-grey-500 hover:text-purple-500 transition-colors duration-100">
              {" "}{visiblePassword ? ( <IoMdEye size={24} /> ) : ( <IoMdEyeOff size={24} /> )}
            </button>
          </div>
        </div>
        <button type='submit' className='w-full mt-10 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>
          Change Password
        </button>
      </form>
    </div>
  )
}

export default Setting
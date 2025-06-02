import React, { useState , useEffect } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { fetchClients, fetchDepartments } from "../../utils/EmployeeHelper.jsx";

const AddEmployee = () => {
    const [visiblePassword, setVisiblePassword] = useState(false);
    const toggleVisibility = () => setVisiblePassword(!visiblePassword);

    const [departments, setDepartments] = useState([])
    const [clients, setClients] = useState([])

    useEffect(() => {
      const getDepartments = async () => {
        const departments = await fetchDepartments()
        setDepartments(departments)
      }
      getDepartments()
    })

    useEffect(() => {
      const getClients = async () => {
        const clients = await fetchClients()
        setClients(clients)
      }
      getClients()
    })

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add New Employee</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Employee ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Employee ID*
            </label>
            <input
              type="text"
              name="employeeID"
            //   onChange={handleChange}
              placeholder="Enter Employee ID"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name*
            </label>
            <input
              type="text"
              name="name"
            //   onChange={handleChange}
              placeholder="Enter Full Name as per Aadhaar"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Personal Contact Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number*
            </label>
            <input
              type="number"
              name="personalContact"
            //   onChange={handleChange}
              placeholder="Enter Personal Phone Number"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Date Of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth*
            </label>
            <input
              type="date"
              name="dateOfBirth"
            //   onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Personal Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Personal Email
            </label>
            <input
              type="email"
              name="email"
            //   onChange={handleChange}
              placeholder="Enter Personal Email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative flex justify-between">
              <input
                type={visiblePassword ? "text" : "password"}
                name="password"
                placeholder="**********"
                //onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
              <button
                type="button"
                onClick={toggleVisibility}
                className="absolute inset-y-0 right-0 px-2 py-2 text-grey-500 hover:text-purple-500 transition-colors duration-100"
              >
                {visiblePassword ? (
                  <IoMdEye size={24} />
                ) : (
                  <IoMdEyeOff size={24} />
                )}
              </button>
            </div>
          </div>
          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Department*
            </label>
            <select
              name="department"
            //   onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Department</option>
              {departments.map((department) => (
                <option key={department._id} value={department._id}>
                  {department.departmentName}
                </option>
              ))}
            </select>
          </div>
          {/* Client  ID*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Client ID*
            </label>
            <select
              name="clientID"
            //   onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Client ID</option>
              {clients.map((client) => (
                <option key={client._id} value={client._id}>
                  {client.clientID}
                </option>
              ))}
            </select>
          </div>
          {/* Client */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Client*
            </label>
            <select
              name="client"
            //   onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Client</option>
              {clients.map((client) => (
                <option key={client._id} value={client._id}>
                  {client.clientName}
                </option>
              ))}
            </select>
          </div>
          </div>
          </form>
    </div>
  )
}

export default AddEmployee

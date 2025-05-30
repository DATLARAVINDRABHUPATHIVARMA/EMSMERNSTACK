import React from 'react'

const AddDepartment = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6">Add Department</h2>
       <form> 
        <div>
          <label
            htmlFor="departmentName"
            className="text-sm font-medium text-gray-700"
          >
            Department Name*
          </label>
          <input
            type="text"
            name="departmentName"
            // onChange={handleChange}
            placeholder="Enter Dep Name"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mt-3">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            // onChange={handleChange}
            placeholder="Description"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows="5"
          ></textarea>
        </div>
        <div className="mt-3">
          <label
            htmlFor="employeeCount"
            className="block text-sm font-medium text-gray-700"
          >
            Total Employees*
          </label>
          <input
            type="number"
            name="employeeCount"
            // onChange={handleChange}
            placeholder="Number of Employees"
            className="block mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Department
        </button>
        <div className="mt-3">
          <p>All * marked must be fields must be required</p>
        </div>
      </form>
    </div>
  )
}

export default AddDepartment

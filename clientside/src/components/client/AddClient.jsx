import React from 'react'

const AddClient = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6">Add Client</h2>
       <form> 
        <div>
          <label
            htmlFor="clientID"
            className="text-sm font-medium text-gray-700"
          >
            Client ID*
          </label>
          <input
            type="text"
            name="clientID"
            // onChange={handleChange}
            placeholder="Enter Client ID"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mt-3">
          <label
            htmlFor="clientName"
            className="text-sm font-medium text-gray-700"
          >
            Client Name*
          </label>
          <input
            type="text"
            name="clientName"
            // onChange={handleChange}
            placeholder="Enter Client Name"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mt-3">
          <label
            htmlFor="clientServices"
            className="text-sm font-medium text-gray-700"
          >
            Client Services*
          </label>
          <input
            type="text"
            name="clientServices"
            // onChange={handleChange}
            placeholder="Enter Client Services"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mt-3">
          <label
            htmlFor="clientLocation"
            className="text-sm font-medium text-gray-700"
          >
            Client Location*
          </label>
          <input
            type="text"
            name="clientLocation"
            // onChange={handleChange}
            placeholder="Enter Client Location"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mt-3">
          <label
            htmlFor="clientServiceStartedOn"
            className="text-sm font-medium text-gray-700"
          >
            Client Service Starting Date*
          </label>
          <input
            type="date"
            name="clientServiceStartedOn"
            // onChange={handleChange}
            placeholder="Enter Service Starting Date"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* updation date, ending date, logo, map location etc*/}
        <div className="mt-3">
          <label
            htmlFor="clientDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Client Description
          </label>
          <textarea
            name="clientDescription"
            // onChange={handleChange}
            placeholder="Client Description"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows="5"
          ></textarea>
        </div>
        <div className="mt-3">
          <label
            htmlFor="clientEmployeeCount"
            className="block text-sm font-medium text-gray-700"
          >
            Total Employees for Client*
          </label>
          <input
            type="number"
            name="clientEmployeeCount"
            // onChange={handleChange}
            placeholder="Number of Employees for Client"
            className="block mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Client
        </button>
        <div className="mt-3">
          <p>All * marked must be fields must be required</p>
        </div>
      </form>
    </div>
  )
}

export default AddClient

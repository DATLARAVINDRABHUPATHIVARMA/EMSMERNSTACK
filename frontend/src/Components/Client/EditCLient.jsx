import axios from 'axios'
import React, { useState,  useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const EditClient = () => {
    const {id} = useParams()
    const [client, setClient] = useState([])
    const [cliLoading, setCliLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  };

    useEffect(() => {
    const fetchClients = async () => {
      setCliLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/client/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          setClient(response.data.client)
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setCliLoading(false);
      }
    };
    
    fetchClients();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
        try {
          const response = await axios.put(
            `http://localhost:5000/api/client/${id}`,
            client,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          if (response.data.success) {
            navigate("/admin-dashboard/clients")
          }
        } catch (error) {
          if (error.response && !error.response.data.success) {
            alert(error.response.data.error);
          }
        }
  }

  return (
    <>{cliLoading ? <div>Loading...</div> :
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6">Edit Client</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="clientName"
            className="text-sm font-medium text-gray-700"
          >
            Client Name*
          </label>
          <input
            type="text"
            name="clientName"
            value={cli.clientName}
            onChange={handleChange}
            placeholder="Enter Client Name"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mt-3">
          <label
            htmlFor="clientDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="clientDescription"
            value={cli.clientDescription}
            onChange={handleChange}
            placeholder="Description"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows="5"
          ></textarea>
        </div>
        <div className="mt-3">
          <label
            htmlFor="clientEmployeeCount"
            className="block text-sm font-medium text-gray-700"
          >
            Total Employees*
          </label>
          <input
            type="number"
            name="clientEmployeeCount"
            value={client.clientEmployeeCount}
            onChange={handleChange}
            placeholder="Number of Employees"
            className="block mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit Client
        </button>
        <div className="mt-3">
          <p>All * marked must be fields must be required</p>
        </div>
      </form>
    </div>}</>
  )
}

export default EditClient

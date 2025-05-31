import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";
import { Link } from 'react-router-dom'
import { ClientButtons, columns } from '../../utils/ClientHelper.jsx';
import axios from 'axios';

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [clientLoading, setClientLoading] = useState(false);

  const onClientDelete = async (id) => {
    const data = clients.filter(client => client._id !== id);
    setClients(data);
  };

  useEffect(() => {
    const fetchClients = async () => {
      setClientLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/client",
          {
            headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`,},
          }
        );
        if(response.data.success){
          let sno = 1;
          const data = await response.data.clients.map((client) => ({
            _id: client._id,
            sno: sno++,
            clientID: client.clientID,
            clientName: client.clientName,
            clientServices: client.clientServices,
            clientLocation: client.clientLocation,
            action: (
              <ClientButtons _id={client._id} onClientDelete={onClientDelete}/>
            ),
          }))
          setClients(data);
        }
      } catch(error){
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setClientLoading(false);
      }
    }

    fetchClients();
  }, [])

  return (
     <>
      {clientLoading ? (
        <div>Loading Clients Table...</div>
      ) : (
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Clients</h3>
      </div>
      <div className="flex justify-between items-center">
        <input type="text" placeholder="Search By Client ID" className="px-4 py-0.5 border"
        // onChange={filterClients}
        />
        <Link to="/admin-dashboard/add-client" className="px-4 py-1 bg-purple-500 rounded text-white">
          Add New Client
        </Link>
      </div>
      <div className="mt-5">
        <DataTable columns={columns} data={clients}/>
      </div>
    </div>
     )}
    </>
  )
}

export default ClientList

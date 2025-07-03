import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";
import { Link, NavLink } from 'react-router-dom'
import { ClientButtons, columns } from '../../utils/ClientHelper.jsx';
import axios from 'axios';

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [clientLoading, setClientLoading] = useState(false);
  const [filteredClients, setFilteredClients] = useState([]);

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
            departmentName: client.clientServices.departmentName,
            siteName: client.clientLocation.siteName,
            action: (
              <ClientButtons _id={client._id} onClientDelete={onClientDelete}/>
            ),
          }))
          setClients(data);
          setFilteredClients(data)
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

  const [searchTerm, setSearchTerm] = useState('');

  const filterClients = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const records = clients.filter((client) =>
     ['clientID', 'clientName'].some(
      (key) => client[key]?.toLowerCase().includes(value)
    )
  );
    setFilteredClients(records)
  }

  return (
    <div className="p-5">
      <div className='flex items-center text-white justify gap-2 h-12 bg-gray-200 px-5 w-full rounded'>
      <NavLink to='/admin-dashboard/contracts' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Contracts</NavLink>
      <NavLink to='/admin-dashboard/licenses' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Licenses</NavLink>
      <NavLink to='/admin-dashboard/Attendance' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Attendance</NavLink>
      <NavLink to='/admin-dashboard/Billing' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Billing</NavLink>
      <NavLink to='/admin-dashboard/Reciepts' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Reciepts</NavLink>
    </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Clients</h3>
      </div>
      <div className="flex justify-between items-center">
        <input type="text" placeholder="Search By Client ID" className="px-4 py-0.5 border"
        value={searchTerm}
        onChange={filterClients}
        />
        <Link to="/admin-dashboard/add-client" className="px-4 py-1 bg-purple-500 rounded text-white">
          Add New Client
        </Link>
      </div>
      <div className="mt-5">
        <DataTable columns={columns} data={filteredClients} pagination/>
      </div>
    </div>
  )
}

export default ClientList

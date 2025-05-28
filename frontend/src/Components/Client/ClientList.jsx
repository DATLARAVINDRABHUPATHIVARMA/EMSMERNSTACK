import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { columns, ClientButtons } from "../../Utils/ClientHelper";
import axios from "axios";

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [cliLoading, setCliLoading] = useState(false);
  const [filteredClients, setFilteredClients] = useState([]);

  const onClientDelete = async (id) => {
    const data = clients.filter(cli => cli._id !== id);
    setClients(data);
  };

  useEffect(() => {
    const fetchClients = async () => {
      setCliLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:5000/api/client",
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          let sno = 1;
          const data = await response.data.clients.map((dep) => ({
            _id: cli._id,
            sno: sno++,
            clientName: cli.clientName,
            employeeCount: dep.employeeCount,
            action: (
              <ClientButtons
                _id={cli._id}
                onClientDelete={onClientDelete}
              />
            ),
          }));
          setClients(data);
          setFilteredClients(data)
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
  }, []);

  const filterClients = (e) => {
    const records = clients.filter((cli) => dep.clientName.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilteredClients(records)
  }

  return (
    <>
      {cliLoading ? (
        <div>Loading Clients Table...</div>
      ) : (
        <div className="p-5">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Client Details</h3>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search By Client Name"
              className="px-4 py-0.5 border"
              onChange={filterClients}
            />
            <Link
              to="/admin-dashboard/add-client"
              className="px-4 py-1 bg-purple-500 rounded text-white"
            >
              Add New Client
            </Link>
          </div>
          <div className="mt-5">
            <DataTable columns={columns} data={filteredClients} pagination/>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientList;

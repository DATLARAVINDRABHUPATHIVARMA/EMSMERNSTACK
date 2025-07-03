import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";
import { Link } from 'react-router-dom'
import axios from 'axios';

const CounterList = () => {
    const [contracts, setContracts] = useState([]);
    const [contractLoading, setContractLoading] = useState(false);
    const [filteredContracts, setFilteredContracts] = useState([]);

    useEffect(() => {
    const fetchContracts = async () => {
      setContractLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/contract",
          {
            headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`,},
          }
        );
        if(response.data.success){
          let sno = 1;
          const data = await response.data.clients.map((contract) => ({
            _id: contract._id,
            sno: sno++,
            clientID: contract.client.clientID,
            clientName: contract.client.clientName,
            contractID: contract.contractID,
            departmentName: client.clientServices.departmentName,
            siteName: client.clientLocation.siteName,
            action: (
              <ContractButtons _id={contract._id} />
            ),
          }))
          setContracts(data);
          setFilteredContracts(data)
        }
      } catch(error){
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setClientLoading(false);
      }
    }

    fetchContracts();
  }, [])

  const [searchTerm, setSearchTerm] = useState('');
  
    const filterContracts = (e) => {
      const value = e.target.value.toLowerCase();
      setSearchTerm(value);
  
      const records = clients.filter((contract) =>
       ['clientID', 'clientName', ].some(
        (key) => contract[key]?.toLowerCase().includes(value)
      )
    );
      setFilteredContracts(records)
    }

  return (
    <div>
      
    </div>
  )
}

export default CounterList

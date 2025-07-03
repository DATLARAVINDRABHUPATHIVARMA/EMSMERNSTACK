import React from 'react'

const EditContract = () => {

    useEffect(() => {
        const getClients = async () => {
          const clients = await fetchClients();
          setClients(clients);
        };
        getClients();
      }, []);


  return (
    <div>
      
    </div>
  )
}

export default EditContract

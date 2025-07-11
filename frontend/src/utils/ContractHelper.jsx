import axios from 'axios';

export const fetchClients = async () => {
  let clients
  try {
    const response = await axios.get("http://localhost:5000/api/client", {
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`,
      },
    })
    if(response.data.success){
      clients = response.data.clients
    }
  } catch (error) {
    if(error.response && !error.response.data.success){
      alert(error.response.data.error);
    }
  }
  return clients
}
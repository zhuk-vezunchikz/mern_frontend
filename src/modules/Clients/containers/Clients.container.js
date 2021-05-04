import React, { useEffect } from 'react';
import ClientsComponent from '../components/Clients.component';
import { useSelector } from 'react-redux';

const ClientsContainer = () => {

  const clients = useSelector((state) => state.clientsReducer.clients);

  useEffect(async () => {
    try {
      const response = await fetch('api/clients/addClient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({firstName: 'Evgeniy', lastName: 'Zhuk', phone: "111 11 11"})
      })
      const result = await response.json()
      console.log(result);
    } catch(e) {
      throw e
    }
    
  }, [])

  return <ClientsComponent clients={clients} />;
};

export default ClientsContainer;

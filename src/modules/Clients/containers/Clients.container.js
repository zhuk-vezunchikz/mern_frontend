import React from 'react';
import ClientsComponent from '../components/Clients.component';
import { useSelector } from 'react-redux';

const ClientsContainer = () => {
  const clients = useSelector((state) => state.clientsReducer.clients);
  return <ClientsComponent clients={clients} />;
};

export default ClientsContainer;

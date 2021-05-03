import React from 'react';
import styles from '../components/Clients.module.css';
import ClientCard from '../../../common/ClientCard/ClientCard.component';

const ClientsComponent = (props) => {
  const { clients } = props;
  return (
    <div>
      <h1>Clients</h1>
      <div className={styles.container}>
        {clients.map((client) => {
          return <ClientCard firstName={client.firstName} lastName={client.lastName} />;
        })}
      </div>
    </div>
  );
};

export default ClientsComponent;

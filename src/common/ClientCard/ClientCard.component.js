import React from 'react';
import styles from './ClientsCard.module.css';

const ClientCard = (props) => {
  const { firstName, lastName } = props;
  return (
    <div className={styles.clientCard}>
      <div>{firstName}</div>
      <div>{lastName}</div>
    </div>
  );
};

export default ClientCard;

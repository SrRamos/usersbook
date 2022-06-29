import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  const { children } = props;

  return (
    <div className={styles.root}>{children}</div>
  )
}

export default Card;

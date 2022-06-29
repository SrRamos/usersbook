import React from 'react';
import classnames from 'classnames';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = (props: CardProps) => {
  const { children, className = ''} = props;

  return (
    <div className={classnames(styles.root, { [className]: !!className })}>
      {children}
    </div>
  )
}

export default Card;

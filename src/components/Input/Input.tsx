import React, { useState } from 'react';
import styles from './Input.module.css';

interface InputProps {
  id: string;
  type?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const {
    id,
    type = 'text',
    placeholder,
    defaultValue,
    label,
    onChange,
  } = props;

  const [value, setValue] = useState<string>(defaultValue ?? '');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event?.currentTarget.value)

    typeof onChange === 'function' && onChange(event?.currentTarget.value);
  };

  return (
    <div className={styles.root}>
      {label ? <label className={styles.label} htmlFor={id}>{label}</label> : null}
      <input
        id={id}
        type={type}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  )
}

export default Input;

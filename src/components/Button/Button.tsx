import classNames from 'classnames';
import styles from './Button.module.css';

interface ButtonProps {
  onClick?: () => void;
  value: string;
  disabled?: boolean;
  isSecondary?: boolean;
}

const Button = (props: ButtonProps) => {
  const { value, onClick, disabled, isSecondary } = props;
  const buttonStyles = classNames(
    styles.root,
    {
      [styles.secondary]: isSecondary,
      [styles.disabled]: disabled,
    }
  )

  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick()
    }
  }

  return (
    <button
      disabled={disabled}
      className={buttonStyles}
      type="button"
      onClick={handleClick}
    >
      {value}
    </button>
  )
}

export default Button;

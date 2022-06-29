import classnames from 'classnames';
import styles from './Avatar.module.css';

interface AvatarProps {
  url: string;
  name: string;
  className?: string;
}

const Avatar = (props: AvatarProps) => {
  const { url, name, className = '' } = props;

  return (
    <img className={classnames(styles.root, { [className]: !!className })} src={url} alt={name} />
  )
}

export default Avatar;

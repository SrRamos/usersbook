import styles from './Avatar.module.css';

interface AvatarProps {
  url: string;
  name: string;
}

const Avatar = (props: AvatarProps) => {
  const { url, name } = props;

  return (
    <img className={styles.root} src={url} alt={name} />
  )
}

export default Avatar;

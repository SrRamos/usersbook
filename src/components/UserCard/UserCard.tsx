import { IUser } from "../../types";
import Avatar from "../Avatar";
import Card from "../Card";
import styles from './UserCard.module.css';

interface UserCardProps {
  user: IUser;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Card className={styles.root}>
      <Avatar className={styles.avatar} url={user.avatar} name={user.name} />
      <h2>{user.name}</h2>
      <p>{user.description}</p>
    </Card>
  )
}

export default UserCard;

import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import styles from './Users.module.css';

const Users = () => {
  return (
    <section className={styles.root}>
      <Card>
        <Avatar
          url="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          name="Jessica"
        />
        <Button disabled isSecondary value="Load More" />
        <Input id="test" label="Username" placeholder="username" />
      </Card>
    </section>
  )
}

export default Users;

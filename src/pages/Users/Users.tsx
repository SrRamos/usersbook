import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Input from "../../components/Input/Input";
import UserCard from '../../components/UserCard';
import api from '../../services/users';
import { IUser } from '../../types';
import styles from './Users.module.css';

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [page, setPage] = useState<number>(1)
  const [displayErrpr, setDisplayError] = useState<boolean>(false)

  const loadUsers = (pageToLoad: number, search?: string) => {
    api.fetchUsers(pageToLoad, search)
      .then(res => setUsers(res))
      .catch(() => setDisplayError(true));
  };

  useEffect(() => {
    loadUsers(page);
  }, [page])

  const filterUsers = (value: string) => {
    loadUsers(page, value);
  };

  if (displayErrpr) {
    return (
      <section className={styles.root}>
        <h2>Ooops! There was an error fetrching the users.</h2>
      </section>
    )
  }

  return (
    <section className={styles.root}>
      <div className={styles.header}>
        <h1>Users list</h1>
        <Input id="search" placeholder='search...' onChange={filterUsers}/>
      </div>
      <div className={styles.container}>
        {users.length
          ? users.map(user => <UserCard key={user.id} user={user}/>)
          : <h2>Ooops! no users here. </h2>
        }
      </div>
      <div className={styles.more}>
        {/* Condition page === 2 because we know the max page value in this example */}
        {(!users.length || page === 2) ? null : <Button value='Load more' onClick={() => setPage(page + 1)}/>}
      </div>
    </section>
  )
}

export default Users;

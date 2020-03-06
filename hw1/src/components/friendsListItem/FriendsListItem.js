import React from "react";
import styles from "./FriendsListItem.module.css";

const FriendsListItem = ({ avatar, name, isOnline }) => {
  const isActiveUser = isOnline ? styles.active : styles.unactive;
  return (
    <li className={styles.item}>
      <span className={isActiveUser}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendsListItem;

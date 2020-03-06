import React from "react";
import FriendsListItem from "../friendsListItem"
import styles from "./FriendsList.module.css";
// avatar - ссылка на аватар
// name - имя друга
// isOnline - буль сигнализирующий о состоянии друга, в сети или нет.
const FriendsList = ({props}) => {
 
  return (
    <ul className={styles.list}>
      {props.map(listItem => (
        <FriendsListItem
          key={listItem.id}
          avatar={listItem.avatar}
          name={listItem.name}
          isOnline={listItem.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendsList;

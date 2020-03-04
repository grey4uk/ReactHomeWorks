import React from "react";
import styles from "./card.module.css";
// name — имя пользователя
// tag — тег в социальной сети без @
// location — город и страна
// avatar — url на изображение
// stats — объект с информацией об активности
const Card = props => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={props.avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{props.name}</p>
        <p className={styles.tag}>@{props.tag}</p>
        <p className={styles.location}>{props.location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className="quantity">{props.stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className="quantity">{props.stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className="quantity">{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Card;

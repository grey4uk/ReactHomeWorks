import React from "react";
import styles from "./statisticalData.module.css";


const StatisticalData = ({ title, stats }) => {
  const randomBg=()=>{return '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()};
 
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.list}>
        {stats.map(StatsItem => {
          return (
            <li key={StatsItem.id} className={styles.item} style={{backgroundColor:randomBg()}}>
              <span className={styles.label}>{StatsItem.label}</span>
              <span className={styles.percentage}>{StatsItem.percentage} %</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default StatisticalData;

import React from "react";
import styles from "./Transactions.module.css";

// id — уникальный идентификатор транзакции
// type — тип транзакции
// amount - сумма транзакции
// currency - тип валюты

const Transactions = ({ items }) => {
    let flag=true;
    const changeColor=()=>{flag=!flag;return !flag?'#fff':'#b7dfe9';};
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
          {
              items.map(item=><tr key={item.id} style={{backgroundColor:changeColor()}}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>)
          }
        
      </tbody>
    </table>
  );
};

export default Transactions;

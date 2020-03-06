import React from "react";
import profile from "./profile.json";
import Card from "./card";
import StatisticalData from "./statisticalData";
import statistic from "./statistic.json";
import friends from './friends.json';
import FriendsList from './friendsData';
import transactions from "./transactions.json";
import Transactions from "./transactionsData"


const App = () => {
  return (
    <>
      <Card key={profile.name} {...profile} />
      <StatisticalData title="Upload stats" stats={statistic} />
      <FriendsList props={friends}/>
      <Transactions items={transactions} />
    </>
  );
};

export default App;

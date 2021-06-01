// Modules
import React from "react";
// Components
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import Container from "./components/Container/Container";
// Data
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import user from "./data/user.json";
// Styles

const App = () => {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
};

export default App;

import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import Transactions from "./Transactions/Transactions";
import getRandomHexColor from "utils/randomHex";
import user from "data/user.json";
import statisticsData from "data/statistics-data.json";
import friends from "data/friends.json";
import transactions from "data/transactions.json";

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticsData} color={getRandomHexColor()} />
      <FriendList friendList={friends} />
      <Transactions data={transactions} />
    </div>
  );
};

import Profile from './profile/Profile';
import userProfile from '../data/profile.json';

import Statistic from './statistic/Statistic';
import statistics from '../data/stats.json';

import FriendsList from './friends/Friends';
import friends from '../data/friends.json';

import TransActionList from './transaction/Transactions';
import transactions from '../data/transaction.json';


export const App = () => {
  return (
    <div>
      <Profile userData={userProfile} />
      <Statistic statistics={statistics} />
      <FriendsList friendList={friends} />
      <TransActionList transActionList={transactions} />
    </div>
  );
};

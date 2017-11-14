import React from 'react';
import User from './user';

import userDb from '../db'

class UsersList extends React.Component {
  render () {
    return (
      <div>
        {userDb.map(user => <User user={user} /> )}
      </div>
    );
  }
}
export default UsersList;

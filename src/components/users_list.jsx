import React from 'react';
import User from './user';

import userDb from '../db'

class UsersList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      usersList: userDb
    }
  }

  setUser = (id, user) => {
    var usersList = [...this.state.usersList]
    usersList[id] = user
    console.log(usersList);
    this.setState({usersList: [...usersList]})
  }

  render () {
    var { usersList } = this.state
    const humanCount = usersList.reduce((acc, val) => val.isHuman ? ++acc : acc, 0)
    return (
      <div className="users-list">
        Human count : {humanCount}
        {usersList.map((user, id) =>
          <User
            key= {id}
            user={user}
            submit={ (user) => this.setUser(id, user)}
        />
        )}
      </div>
    );
  }
}
export default UsersList;

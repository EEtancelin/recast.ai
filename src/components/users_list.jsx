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
    console.log("chat");
    console.log(user);
    var usersList = [...this.state.usersList]
    console.log(this.state.usersList);
    usersList[id] = user
    console.log(usersList);
    this.setState({usersList: [...usersList]})
  }

  render () {
    var { usersList } = this.state
    return (
      <div>
        {console.log(this.constructor.name, "Props", this.props)}
        {console.log(this.constructor.name, "State", this.state)}
        {usersList.map((user, id) =>
          <User
            user={user}
            submit={ (user) => this.setUser(id, user)}
        />
        )}
      </div>
    );
  }
}
export default UsersList;

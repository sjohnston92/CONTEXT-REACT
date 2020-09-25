import React from 'react';

export const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component{
  state = {
    firstName: "Ben",
    lastName: "Dover",
    email: "123@Fakeemail.com",
    dob:"01011997",
    updateUser: (user) => this.updateUser(user),
  };
  
  updateUser = (user) => {
    this.setState({...user, });
  };

  
  
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserProvider;
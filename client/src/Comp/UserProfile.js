import React from 'react';
import User from './User';
import UserForm from './UserForm';
import {Container} from 'react-bootstrap';


class UserProfile extends React.Component {

render(){
return(
<Container>
<User />
<UserForm />
</Container>
);

};

}




export default UserProfile;
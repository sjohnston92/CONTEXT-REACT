import React from 'react';
import { Nav,NavLink } from 'react-bootstrap';
import { UserConsumer } from '../providers/UserProvider';


const NavBar =()=> {
  return (
<UserConsumer>
  { value => (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
       <Nav.Link href="/userprofile">{value.firstName} {value.lastName}</Nav.Link>
      </Nav.Item>
    </Nav>
  )}
</UserConsumer>
  );
};

export default NavBar;
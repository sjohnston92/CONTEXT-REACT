import React, { useContext } from 'react';
import { Card, } from 'react-bootstrap';
import {UserContext} from '../providers/UserProvider'

const User = () => {
  const { firstName, lastName, email, dob, } = useContext(UserContext);
  return (
    <Card>
      <Card.Body>
      <Card.Title>{firstName} {lastName}</Card.Title>
        <Card.Subtitle>Date of Birth: {dob}</Card.Subtitle>
      </Card.Body>
      <Card.Body>
        <p>Email: {email}</p>
      </Card.Body>
    </Card>
);
};

export default User;
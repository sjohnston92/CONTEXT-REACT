import React from 'react';
import {Form,Button} from 'react-bootstrap';
import { UserConsumer } from '../providers/UserProvider';

class UserForm extends React.Component {
  state = {
    email: this.props.email, 
    firstName: this.props.firstName, 
    lastName: this.props.lastName, 
    dob: this.props.dob,
  };

  handleChange = (e) => {

    this.setState({
      [e.target.name]:e.target.value
    });
  };

  handleSubmit = (e) => {
    this.props.updateUser(this.state);
    
  }


  render() {
    return( 
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email"
          name = "email" 
          value={this.state.email} 
          onChange={this.handleChange}
          />
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>
        <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" 
          placeholder="Enter first name" 
          name= "firstName"
          value={this.state.firstName} 
          onChange={this.handleChange}
          />
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>
        <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" 
          placeholder="Enter last name"
          name ="lastName"
          value ={this.state.lastName} 
          onChange={this.handleChange}
          />
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>
        <Form.Group>
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control 
          type="number" 
          placeholder="Enter DOB" 
          name="dob"
          value={this.state.dob}
          onChange={this.handleChange}
          />
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>


        <Button onSubmit={this.handleSubmit} variant="primary" type="submit">
           Update
        </Button>
      </Form>
    );
  };
};


const ConnectedUserForm =(props) => {
  return(
    <UserConsumer>
      {(value) =>(
        <UserForm
        {...props}
        email={value.email}
        firstName={value.firstName}
        lastName={value.lastName}
        dob={value.dob} 
        updateUser = {value.updateUser} />
      )}
    </UserConsumer>
  )
}



export default ConnectedUserForm;

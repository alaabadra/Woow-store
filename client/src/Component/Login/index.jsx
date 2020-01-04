import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

import { Link, Redirect } from 'react-router-dom';

export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
    message: '',
  };

  handleClick = () => {
    const { email, password } = this.state;
    const { setUserInfo } = this.props;
    if (email && password) {
      // make a requset to the back with method post and data{email , password}
      fetch('/api/v1/login', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email,
          pass: password,
        }),
      })
        .then(response => {
          if (response.status !== 200) {
            this.setState({ message: 'Check email or password ... !!' });
          }
          return response.json();
        })
      
    } else {
      this.setState({ message: 'Please enter all fields' });
    }
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value, message: '' });

  render() {
    const { email, password, message } = this.state;
  
    return (
      <Container>
        <Form className="login__form">
          <h2 className="login__form-title">LOGIN</h2>
          <Form.Group>
            <Form.Label>email :</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password :</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={this.handleChange}
            />
          </Form.Group>
          <p className="message">{message}</p>
          <Button
            type="button"
            className="login__form-btn"
            onClick={this.handleClick}
          >
            Login
          </Button>
          <Form.Text className="login__form__text-muted">
            Don’t have an account?{' '}
            <Link className="link-signup-word" to="/signup">
              sign up
            </Link>
          </Form.Text>
        </Form>
      </Container>
    );
  }
}

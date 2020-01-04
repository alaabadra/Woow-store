import React from 'react';
import './style.css';
import { Form, Button, Container ,Modal} from 'react-bootstrap';

 import { Link, Redirect } from 'react-router-dom';

 export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
    messageErr:false,
    messageSuccess:false,
    isAuthenticated: false,
  };

   handleClick = () => {
    const { email, password } = this.state;
    if (email && password) {

       // make a requset to the back with method post and data{email , password}
      fetch('/api/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then(response => {
          if (response.status === 400 || response.status === 404) {
            this.setState({ messageErr: 'Bad Request , Check username or password ... !!' });
          } else if (response.status === 401) {
            this.setState({ messageErr: 'you are UnAuthorized' });
          } else if (response.status >= 500) {
            this.setState({ messageErr: 'Sorry , Internal Server ERROR' })
          } else {
            this.setState({messageErr:''});
            this.setState({isAuthenticated:true})
            this.setState({ messageSuccess: 'login sucessfully '});
            return window.location.href = '/'
          }
        })


     } else {
      this.setState({ messageErr: 'Please enter all fields' });
    }
  };

   handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });
  render() {
    const { email, password, messageErr, messageSuccess } = this.state;
    const { location } = this.props;

    return (
      <Container>
        <Form className="content-signup">
          <h2 className="content-signup__word-sigup">SIGN UP</h2>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>
              Username :{' '}
              <span className="content-signup__username-star">*</span>
            </Form.Label>
            <Form.Control
              name="username"
              value={username}
              onChange={this.handleChange}
              type="username"
              placeholder="e.g: emily1234"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              E-mail : <span className="content-signup__email-star">*</span>
            </Form.Label>
            <Form.Control
              name="email"
              value={email}
              onChange={this.handleChange}
              type="email"
              placeholder="example@mail.com"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              Password :{' '}
              <span className="content-signup__password-star">*</span>
            </Form.Label>
            <Form.Control
              name="password"
              value={password}
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
     

          <p className="msg-success">{messageSuccess}</p>
                                <p className="msg-err">{messageErr}</p> 
                                <Link>
                                <span className="link-forgot-password">Forget Password  ?</span>
                                </Link>

          <Button
            variant="primary"
            type="submit"
            className="content-signup__submit"
            onClick={this.handleClick}
          >
            Submit
          </Button>
        
         <Form.Text className="login__form__text-muted">
                            Don’t have an account? {''}

                             <Link className="link-signup-word" to="/signup">
                            Sign Up  
                            </Link>
                            <br/>
                            or

                             <Link className="link-guest-word" to="/aguest">
                            continue as guest 
                            </Link>

                             </Form.Text>
        </Form>
      </Container>
    );
  }
}

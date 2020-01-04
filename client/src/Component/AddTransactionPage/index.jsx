import React from 'react';
// import './style.css';
import { Spinner} from 'react-bootstrap'
import { Container, Alert, Card, Col, Row, Form, Button, Modal } from 'react-bootstrap'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
export default class AddTransactionPage extends React.Component {
    state={
        idTransacion:'',numCard:'', price:'',status:'',email:'',password:'',msgSuccess:''
    }
    handleClick=(e)=>{

        const { idTransacion,numCard, price,status,email,password,msgSuccess}=this.state;
              fetch('/api/v1/generate-pay', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
                idTransacion,numCard, price,status,email,password,msgSuccess
            }),
          })
            .then(res => {
                
                return res.json();
            })
            .then(response=>{
                if(response){
                    this.setState({msgSuccess:'success'})
                }
            })
    }
    componentDidMount(){
        this.handleClick();
        }
        handleChange = ({ target: { value, name } }) =>
        this.setState({ [name]: value });
    render(){
        const { idTransacion,numCard, price,status,email,password,msgSuccess}=this.state;
      
        
        return(
            <div>
            <Form className="">
                            <div className="">
                            <h2 className="">generate payment page </h2>

                             </div>

                            <Form.Group>
                            <label className=""> id AddTransactionPage</label>
                            <input  type="text"
                                name="idTransacion"
                                value={idTransacion}
                                placeholder="enter id trans"
                                onChange={this.handleChange}
                                className="comp-control"/>
                          
                            </Form.Group>
                            <Form.Group>
                            <label className=""> numCard </label>
                            <input  type="text"
                                name="numCard"
                                value={numCard}
                                onChange={this.handleChange}
                                className="comp-msgcontrol"/>
                            
                            </Form.Group>
                            <Form.Group>
                            <label className=""> price </label>
                            <input  type="text"
                                name="price"
                                value={price}
                                onChange={this.handleChange}
                                className="comp-msgcontrol"/>
                            
                            </Form.Group>
                            <Form.Group>
                            <label className=""> status</label>
                           <input  type="text"
                                name="status"
                                value={status}
                                placeholder="ادخل العنوان هنا"
                                onChange={this.handleChange}
                                className="comp-control"/>
                           
                            </Form.Group>
                            <Form.Group>
                            <label className=""> email </label>
                            <input  type="text"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                                className="comp-msgcontrol"/>
                            
                            </Form.Group>

                            <Form.Group>
                            <label className=""> pass </label>
                            <input  type="text"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                                className="comp-msgcontrol"/>
                            
                            </Form.Group>
 
                                 <Button
                                  type="button"
                                  className=""
                                  onClick={this.handleClick}
                                >
                                  send
                              </Button>
                              {/* <p className="msg-success">{msgSuccess}</p> */}
                          </Form>
          </div>
        )
    }
}
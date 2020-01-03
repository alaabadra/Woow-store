import React from 'react';
import './style.css';
import { Spinner} from 'react-bootstrap'
import { Container, Alert, Card, Col, Row, Form, Button, Modal } from 'react-bootstrap'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
export default class AddTransactionPage extends React.Component {
    state={
        email: '',
        pass:'',
        id_trans: '',
        id_cust: '',
        num_cart: '',
        price: '',
        status: ''
    }
    handleClick=(e)=>{

        const {email,pass,id_trans,id_cust,num_cart,price,status}=this.state;
              fetch('/api/v1/generate-pay', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
               email,pass, id_trans,id_cust,num_cart,price,status
            }),
          })
            .then(res => {
                console.log(111,res);
                
                // return res.json();
            })
            .then(response=>{
                // if(response){
                //     console.log('success',response);
                //     this.setState({msgSuccess:'success'})
                // }
            })
    }
    componentDidMount(){
        this.handleClick();
        }
        handleChange = ({ target: { value, name } }) =>
        this.setState({ [name]: value });
    render(){
        const {email,pass,id_trans,id_cust,num_cart,price,status}=this.state;
        console.log('idT',id_trans);
        console.log('num_cart',num_cart);
        console.log('price',price);
        
        return(
            <div>
            <Form className="complaints">
                            <div className="complaints_div">
                            <h2 className="complaints_div_h2">generate payment page </h2>

                             </div>

                            <Form.Group>
                            <label className="comp-titlelabel"> id AddTransactionPage</label>
                            <input  type="text"
                                name="id_trans"
                                value={id_trans}
                                placeholder="enter id trans"
                                onChange={this.handleChange}
                                className="comp-control"/>
                            {/* <Form.Control
                                type="number"
                                name="phone_num"
                                value={phone_num}
                                placeholder="ادخل رقم الجوال"
                                onChange={this.handleChange}
                                className="comp-control"
                            /> */}
                            </Form.Group>
                            <Form.Group>
                            <label className="comp-titlelabel"> email </label>
                            <input  type="text"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                                className="comp-msgcontrol"/>
                            
                            </Form.Group>
                            <Form.Group>
                            <label className="comp-titlelabel"> password </label>
                            <input  type="text"
                                name="pass"
                                value={pass}
                                onChange={this.handleChange}
                                className="comp-msgcontrol"/>
                            
                            </Form.Group>
                            <Form.Group>
                            <label className="comp-titlelabel"> : id customer </label>
                           <input  type="text"
                                name="id_cust"
                                value={id_cust}
                                placeholder="ادخل العنوان هنا"
                                onChange={this.handleChange}
                                className="comp-control"/>
                            {/* <Form.Control
                                type="text"
                                name="id_cust"
                                value={titlecomp}
                                placeholder="ادخل العنوان هنا"
                                onChange={this.handleChange}
                                className="comp-titlecontrol"

                            /> */}
                            </Form.Group>
                            <Form.Group>
                            <label className="comp-titlelabel"> num num_cart </label>
                            <input  type="text"
                                name="num_cart"
                                value={num_cart}
                                onChange={this.handleChange}
                                className="comp-msgcontrol"/>
                            
                            </Form.Group>
 
                              <div>

                              <button
                                  type="button"
                                  className="comp-filebtn comp-sbtn"
                                >
                                  أرفق ملفات
                              </button>
                              <button
                                  type="button"
                                  className="comp-filebtn comp-ssbtn"
                                >
                                  أضف رسالة صوتية
                              </button>
                              </div>
                                 <Button
                                  type="button"
                                  className="comp-submitbtn"
                                  onClick={this.handleClick}
                                >
                                  ارسال
                              </Button>
                              {/* <p className="msg-success">{msgSuccess}</p> */}
                          </Form>
          </div>
        )
    }
}
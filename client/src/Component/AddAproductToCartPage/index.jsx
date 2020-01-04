import React from 'react';
// import './style.css';
import { Spinner} from 'react-bootstrap'
import { Container, Alert, Card, Col, Row, Form, Button, Modal } from 'react-bootstrap'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
export default class AddAproductToCartPage extends React.Component {
    state={
        productId:'',
        productName:'',   
        productImg:'',
        productPrice:'',
        productSizes:'',
        customerId:'',
        cartProductId:'',
        msg:''
    }
    handleClick=(e)=>{

        const {   productId,
            productName,   
            productImg,
            productPrice,
            productSizes,
            customerId,
            cartProductId,msg}=this.state;
              fetch('/api/v1/add-to-cart', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
                productId,
                productName,   
                productImg,
                productPrice,
                productSizes,
                customerId,
                cartProductId
            }),
          })
            .then(res => {
                return res.json();
            })
            .then(response=>{
                if(response){
                    this.setState({msg:'success'})
                }else{
                    this.setState({msg:'failed , pls sure your data vaild'})

                }
            })
    }
    componentDidMount(){
        this.handleClick();
        }
        handleChange = ({ target: { value, name } }) =>
        this.setState({ [name]: value });
    render(){
        const {   productId,
            productName,   
            productImg,
            productPrice,
            productSizes,
            customerId,
            cartProductId,msg}=this.state;
 
        
        return(
            <div>
            <Form className="">
                            <div className="">
                            <h2 className=""> Add To Cart </h2>

                             </div>

                            <Form.Group>
                            <label className=""> productId</label>
                            <input  type="text"
                                name="productId"
                                value={productId}
                                onChange={this.handleChange}
                                className="comp-control"/>
                        
                            </Form.Group>
                            <Form.Group>
                            <label className=""> productName  </label>
                           <input  type="text"
                                name="productName"
                                value={productName}
                                onChange={this.handleChange}
                                className="comp-control"/>
                           
                            </Form.Group>
                            <Form.Group>
                            <label className=""> productImg </label>
                            <input  type="text"
                                name="productImg"
                                value={productImg}
                                onChange={this.handleChange}
                                className="comp-msgcontrol"/>
                            
                            </Form.Group>

                            <Form.Group>
                            <label className="">productPrice</label>
                            <input  type="text"
                                name="productPrice"
                                value={productPrice}
                                onChange={this.handleChange}
                                className="comp-control"/>
                        
                            </Form.Group>
                            <Form.Group>
                            <label className="">  productSizes </label>
                           <input  type="text"
                                name="productSizes"
                                value={productSizes}
                                onChange={this.handleChange}
                                className="comp-control"/>
                           
                            </Form.Group>

                            <Form.Group>
                            <label className="">customerId </label>
                            <input  type="text"
                                name="customerId"
                                value={customerId}
                                onChange={this.handleChange}
                                className="comp-control"/>
                        
                            </Form.Group>
                            <Form.Group>
                            <label className=""> cartProductId </label>
                           <input  type="text"
                                name="cartProductId"
                                value={cartProductId}
                                onChange={this.handleChange}
                                className="comp-control"/>
                           
                            </Form.Group>
 
                            
                                 <Button
                                  type="button"
                                  className="comp-submitbtn"
                                  onClick={this.handleClick}
                                >
                                  send
                              </Button>
                              <p className="msg-success">{msg}</p>
                          </Form>
          </div>
        )
    }
}
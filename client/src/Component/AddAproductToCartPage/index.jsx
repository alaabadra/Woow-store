import React from 'react';
import './style.css';
import { Spinner} from 'react-bootstrap'
import { Container, Alert, Card, Col, Row, Form, Button, Modal } from 'react-bootstrap'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
export default class AddAproductToCartPage extends React.Component {
    state={
        productId:'',
        productName:'',
        productImg:'',
        productPrice:'',
        productImg:'',
        productSizes:'',
        customerId:'',
        cartProductId:''
    }
    handleClick=(e)=>{

        const { productId,
            productName,
            productImg,
            productPrice,
            productSizes,
            customerId,
            cartProductId}=this.state;
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
                productImg,
                productSizes,
                customerId,
                cartProductId
            }),
          })
            .then(res => {
                console.log('resjson',res);
                
                return res.json();
            })
            .then(response=>{
                if(response){
                    console.log('success',response);
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
        const { productId,
            productName,
            productPrice,
            productImg,
            productSizes,
            customerId,
            cartProductId}=this.state;
        // console.log('mmmm',productImg);
        // console.log('titlecomp',titlecomp);
        // console.log('phone_numo',phone_num);
        
        return(
            <div>
            <Form className="complaints">
                            <div className="complaints_div">
                            <h2 className="complaints_div_h2">Add to cart</h2>

                             </div>
                             <Form.Group>
                            <label className="comp-titlelabel"> product id</label>
                            <input  type="text"
                                name="productId"
                                value={productId}
                                placeholder="ادخل رقم الجوال"
                                onChange={this.handleChange}
                                className="comp-control"/>
                       
                            </Form.Group>
                           
                            <Form.Group>
                            <label className="comp-titlelabel"> product name</label>
                            <input  type="text"
                                name="productName"
                                value={productName}
                                placeholder="ادخل رقم الجوال"
                                onChange={this.handleChange}
                                className="comp-control"/>
                       
                            </Form.Group>

                            <Form.Group>
                            <label className="comp-titlelabel"> : product image </label>
                           <input  type="text"
                                name="productImg"
                                value={productImg}
                                placeholder="ادخل العنوان هنا"
                                onChange={this.handleChange}
                                className="comp-control"/>
                            {/* <Form.Control
                                type="text"
                                name="titlecomp"
                                value={titlecomp}
                                placeholder="ادخل العنوان هنا"
                                onChange={this.handleChange}
                                className="comp-titlecontrol"

                            /> */}
                            </Form.Group>
                            <Form.Group>
                            <label className="comp-titlelabel"> : product price </label>
                           <input  type="text"
                                name="productPrice"
                                value={productPrice}
                                placeholder="ادخل العنوان هنا"
                                onChange={this.handleChange}
                                className="comp-control"/>
                            {/* <Form.Control
                                type="text"
                                name="titlecomp"
                                value={titlecomp}
                                placeholder="ادخل العنوان هنا"
                                onChange={this.handleChange}
                                className="comp-titlecontrol"

                            /> */}
                            </Form.Group>
                            <Form.Group>
                            <label className="comp-titlelabel"> product size</label>
                            <input  type="text"
                                name="productSizes"
                                value={productSizes}
                                placeholder="ادخل رقم الجوال"
                                onChange={this.handleChange}
                                className="comp-control"/>
                       
                            </Form.Group>
                            <Form.Group>
                            <label className="comp-titlelabel"> : cus id</label>
                           <input  type="text"
                                name="customerId"
                                value={customerId}
                                placeholder="ادخل العنوان هنا"
                                onChange={this.handleChange}
                                className="comp-control"/>
                         
                            </Form.Group>

                            <Form.Group>
                            <label className="comp-titlelabel"> cart product id</label>
                            <input  type="text"
                                name="cartProductId"
                                value={cartProductId}
                                placeholder="ادخل رقم الجوال"
                                onChange={this.handleChange}
                                className="comp-control"/>
                       
                            </Form.Group>
                          
                            
                            {/* <Form.Group>
                            <label className="comp-titlelabel"> :ادخل رسالتك هنا  </label>
                            <input  type="text"
                                name="msg_comp"
                                value={msg_comp}
                                onChange={this.handleChange}
                                className="comp-msgcontrol"/>
                            
                            </Form.Group> */}
 
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
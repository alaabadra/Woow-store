import React from 'react';
import './style.css';
import { Spinner} from 'react-bootstrap'
import { Container, Alert, Card, Col, Row, Form, Button, Modal } from 'react-bootstrap'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
export default class Complaint extends React.Component {
    state={
        email:'',
        password:'',
        idTransacion:'',
        numCard:'',
        price:'',
        msgSuccess:'',
        status:''
    }
    handleClick=(e)=>{

        const {email,password,idTransacion,numCard,price,msgSuccess,status}=this.state;
              fetch('/api/v1/generate-pay', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              phone_num,
              msg_comp,   
              titlecomp
            }),
          })
            .then(res => {
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
        const {titlecomp,msg_comp,phone_num,msgSuccess}=this.state;
        console.log('mmmm',msg_comp);
        console.log('titlecomp',titlecomp);
        console.log('phone_numo',phone_num);
        
        return(
            <div>
            <Form className="complaints">
                            <div className="complaints_div">
                            <h2 className="complaints_div_h2">يمكنك تقديم شكوك أو مشكلتك هنا</h2>

                             </div>

                            <Form.Group>
                            <label className="comp-titlelabel"> :رقم الجوال</label>
                            <input  type="text"
                                name="phone_num"
                                value={phone_num}
                                placeholder="ادخل رقم الجوال"
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
                            <label className="comp-titlelabel"> : عنوان المشكلة أو الشكوى </label>
                           <input  type="text"
                                name="titlecomp"
                                value={titlecomp}
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
                            <label className="comp-titlelabel"> :ادخل رسالتك هنا  </label>
                            <input  type="text"
                                name="msg_comp"
                                value={msg_comp}
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
                              <p className="msg-success">{msgSuccess}</p>
                          </Form>
          </div>
        )
    }
}
import React from 'react';
import './style.css';
import { Spinner } from 'react-bootstrap'
import { Container, Alert, Card, Col, Row, Form, Button, Modal, Table } from 'react-bootstrap'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
export default class GetProducts extends React.Component {
    state = {
        valueData: '',
        idTransactions: '',
        customerTransactionsId: '',
        numCard: '',
        price: '',
        status: ''
    }
    componentDidMount() {
        //   const {title,post}=this.state;
        fetch('/api/v1/get-products', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then(res => {
                console.log('resjson', res);

                return res.json()
            })
            .then(response => {
                console.log('ressssss', response);
                // let allTrans = response.AllTransaction
                this.setState({ valueData: response.AllProducts })
                // allTrans.map(item => {

                //     this.setState({ idTransactions: item.id_p_transactions, customerTransactionsId: item.customer_transactions_id, numCard: item.num_card, price: item.price, status: item.status })
                // // })

            });
            console.log('outside',this.state.customerTransactionsId);
            

    }
    render(){
        const { valueData } = this.state;
        return (
            <div>
               
                <div>all operations trans</div>

                
                    {valueData ? (

                        valueData.map(item => {
                            
                            return(
                                <div>
                                {console.log('jjjjj',item)}
                                </div>
                            )
                })
                ):null}


            </div>

        )
    }
}
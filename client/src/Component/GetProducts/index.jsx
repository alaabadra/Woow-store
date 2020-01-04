import React from 'react';
// import './style.css';
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
        fetch('/api/v1/get-products', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then(res => {

                return res.json()
            })
            .then(response => {
                this.setState({ valueData: response.AllProducts })

            });


    }
    render() {
        const { valueData } = this.state;
        return (
            <div>

                <div>all Products</div>


                {valueData ? (

                    valueData.map(item => {

                        return (
                            <div>


                                {item ? (
                                    <Card

                                        onClick={this.handleOnClick}
                                    >

                                        <Card.Header>
                                            <div>
                                                cart_product_id <span >{item.cart_product_id}</span>
                                                <br />
                                                customer_id <span >{item.customer_id}</span>
                                                product_id <span >{item.product_id}</span>
                                            </div>
                                            <span >
                                                {item.product_price}
                                            </span>

                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text >
                                                {item.product_name}
                                            </Card.Text>
                                            <Card.Text >
                                                {item.product_image}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                ) : (
                                        <div>
                                            <Spinner animation="border" variant="info" />
                                        </div>
                                    )}
                            </div>
                        )
                    })
                ) : null}


            </div>

        )
    }
}
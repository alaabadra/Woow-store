import React from 'react';
import './style.css';
import { Spinner } from 'react-bootstrap'
import { Container, Alert, Card, Col, Row, Form, Button, Modal, Table } from 'react-bootstrap'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
export default class ShowTransactionPage extends React.Component {
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
        fetch('/api/v1/get-trans', {
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
                let allTrans = response.AllTransaction
                this.setState({ valueData: response.AllTransaction })
                // allTrans.map(item => {

                //     this.setState({ idTransactions: item.id_p_transactions, customerTransactionsId: item.customer_transactions_id, numCard: item.num_card, price: item.price, status: item.status })
                // })

            });
            console.log('outside',this.state.customerTransactionsId);
            

    }
    render() {
        const { valueData, idTransactions, customerTransactionsId, numCard, price, status } = this.state;
        return (
            <div>
                {console.log('inside', customerTransactionsId)
                }

                <div>all operations trans</div>

                {/* <p >{idTransactions}</p>
                <p >{customerTransactionsId}</p>
                <p >{numCard}</p>
                <p >{price}</p>
                <p >{status}</p> */}
                <Button>nsnnsn</Button>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>idTransactions</th>
                            <th>customerTransactionsId</th>
                            <th>numCard</th>
                            <th>price</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    {valueData ? (

                        valueData.map(item => {
                            
                            return(
                                <div>
                                {console.log('jjjjj',item.customer_transactions_id)}

                              {this.setState({customerTransactionsId:item.customer_transactions_id})}

                                <tbody>
                                    <tr>
                                        <td>{item.id_p_transactions}</td>

                                    </tr>
                                    <tr>
                                        <td>{item.customer_transactions_id}</td>

                                    </tr>
                                    <tr>
                                        <td>{item.price}</td>

                                    </tr>
                                    <tr>
                                        <td>{item.status}</td>

                                    </tr>
                                    <tr>
                                        <td>{item.numCard}</td>

                                    </tr>
                                </tbody>
        
    </div>)
                })
                ):null}
                </Table>


            </div>

        )
    }
}
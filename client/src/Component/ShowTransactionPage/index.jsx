import React from 'react';
import './style.css';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { columns ,data } from './Data';
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
        fetch('/api/v1/get-trans', {
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
                this.setState({ valueData: response.AllTransaction })
               

            });
    }
    render() {
       
        const tableData = {
            columns,
            data
          };
        return (

            <div>          
                <DataTableExtensions
                    {...tableData}
                >
                    <DataTable
                        noHeader
                        defaultSortField="id"
                        defaultSortAsc={false}
                        pagination
                        highlightOnHover
                    />
                </DataTableExtensions>
            </div>

        )
    }
}
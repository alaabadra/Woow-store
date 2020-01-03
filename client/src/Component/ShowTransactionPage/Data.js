export const columns = [
    
    {
        name: 'id_p_transactions',
        selector: 'id_p_transactions',
        sortable: true,
      },
      {
        name: 'price',
        selector: 'price',
        sortable: true,
      },
      {
        name: 'status',
        selector: 'status',
        sortable: true,

      },
      {
        name: 'customer_transactions_id',
        selector: 'customer_transactions_id',
        sortable: true,
      },
      {
        name: 'num_card',
        selector: 'num_card',
        sortable: true,
      }
    
] 


    export const data = [
        {
            id_p_transactions: 1,
          price: 8.99,
          status: 'success',
          customer_transactions_id: 1,
          num_card:213322
        }, {
            id_p_transactions: 2,
          price: 100,
          status: 'failed',
          customer_transactions_id: 3,
          num_card:656544
        },
        {
            id_p_transactions: 5,
          price: 888,
          status: 'success',
          customer_transactions_id: 2,
          num_card:1000
        },
        {
            id_p_transactions: 6,
          price: 888,
          status: 'failed',
          customer_transactions_id: 2,
          num_card:1000
        },
        {
            id_p_transactions: 7,
          price: 888,
          status: 'failed',
          customer_transactions_id: 2,
          num_card:1000
        },
        {
            id_p_transactions: 8,
          price: 888,
          status: 'success',
          customer_transactions_id: 2,
          num_card:1000
        },
        {
        id_p_transactions: 9,
        price: 888,
        status: 'success',
        customer_transactions_id: 2,
        num_card:1000
      }
        
        ];
    
const { getDataCustomer } = require('../../database/queries/customer/getDataCustomer.js');
const { addIntoTransaction } = require('../../database/queries/transaction/addIntoTransaction')
module.exports = (req, res) => {
    const { email, password, idTransacion, numCard, price } = req.body;
    getDataCustomer()
        .then((result) => {
            result.rows.map(el => {
                if (email == el.email) {
                    if (password == el.password) {
                        // enter your num card
                        ///////////////////////
                        //sure of num card

                        //////////////////////
                        const status = 'success';
                        addIntoTransaction(idTransacion, numCard, price, el.customer_id, status)
                            .then(result => {
                                if (result.rows) {
                                    res.status(200).send({
                                        error: null,
                                        msgSuccess: "success your operation payment"
                                    });
                                }
                            })
                    }
                }
            })
        })
}

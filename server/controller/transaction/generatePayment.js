const { getDataCustomer } = require('../../database/queries/customer/getDataCustomer.js');
const { addIntoTransaction } = require('../../database/queries/transaction/addIntoTransaction')
module.exports = (req, res, next) => {
    const { email, password, idTransacion, numCard, price } = req.body;
    const { customer_id } = req.userInfoDec;
    if (customer_id) {
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
                                } else {
                                    res.status(500).send(JSON.stringify({ msg: 'Internal ServerError' }));
                                }
                            })
                            .catch(() => {
                                res.status(500).send(JSON.stringify({ msg: 'occure Internal ServerError, because your data is invalid' }));

                            }
                            );
                    }
                }
            })
        })
    } else {
    res.status(401).send(JSON.stringify({ msg: 'you not authrized in this page' }))
    }
}
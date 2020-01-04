const { getTransaction } = require('../../database/queries/transaction/index');

module.exports = (req, res) => {
    const { customer_id } = req.userInfoDec;
    if (customer_id) {
        getTransaction()
            .then(result => {
                if (result.rowCount) {
                    res.status(200).send({
                        error: null,
                        AllTransaction: result.rows
                    })
                } else {
                    res.status(400).send(JSON.stringify({ msg: 'Internal ServerError' }));
                }
            })
            .catch(() => next({ code: 500, msg: 'sorry , found Inernal server error' }));

    } else {
        res.status(401).send(JSON.stringify({ msg: 'you not authrized in this page' }))
    }
}
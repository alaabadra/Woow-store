
const {getAllProducts} = require('../../database/queries/products/getProducts');

module.exports =(req,res)=>{
    const { customer_id } = req.userInfoDec;
        if (customer_id) {
            res.send({ success: true, data: customer_id });
            getAllProducts()
            .then(result=>{
                if(result.rowCount){
                    res.status(200).send({
                        error:null,
                        AllProducts:result.rows
                    })
                }else{
                    res.status(400).send(JSON.stringify({ msg: 'Internal ServerError' }));
                   
                }
                
            })
            .catch(() => next({ code: 500, msg: 'sorry , found Inernal server error' }));

        } else {
            res.status(401).send(JSON.stringify({ msg: 'you not authrized in this page' }))
        }
   
}


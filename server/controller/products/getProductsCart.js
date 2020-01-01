
const {getProductsCart} = require('../../database/queries/products/index');

module.exports =(req,res)=>{
    const {cartProductId}=req.params;
    getProductsCart(cartProductId)
    .then(result=>{
        if(result.rowCount){
            res.status(200).send({
                error:null,
                allProductsThisCart:result.rows
            })
        }else{
            res.status(400).send(JSON.stringify({ msg: 'sorry , this cart id not exsit ' }));
           
        }
        
    })
    .catch(() => {
        res.status(500).send(JSON.stringify({ msg: 'sorry , Internal server error ' }));

    });
}


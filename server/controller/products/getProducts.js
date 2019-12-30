
const {getAllProducts} = require('../../database/queries/products/getProducts');

module.exports =(req,res)=>{
    getAllProducts()
    .then(result=>{
        if(result.rowCount){
            res.status(200).send({
                error:null,
                allPosts:result.rows
            })
        }else{
            res.status(400).send(JSON.stringify({ msg: 'Internal ServerError' }));
           
        }
        
    })
    .catch(() => next({ code: 500, msg: 'sorry , found Inernal server error' }));
}


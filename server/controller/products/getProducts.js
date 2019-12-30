
const {getAllProducts} = require('../../database/queries/products/getProducts');

module.exports =(req,res)=>{
    getAllProducts()
    .then(result=>{
        console.log(6666,result.rows);
        if(result.rowCount){
            res.status(200).send({
                error:null,
                allPosts:result.rows
            })
        }else{
            res.status(400).send(JSON.stringify({ msg: 'Internal ServerError' }));
           
        }
        
    })
    .catch(console.log)

    
}
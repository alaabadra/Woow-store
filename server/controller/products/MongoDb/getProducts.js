
const { products } = require('../../../database/MongoDb/config/db_buildSchema')
exports.getProductsMongo =  (req, res) => {
    const { customerId } = req.params
       let data = {};
       products.find({})
           .then((result) => {
               console.log(22,result);
               
            //    data = result.rows;
              

                       res.send({
                           data:result
                       })
                    })
                    
                    .catch(()=>{
 
                        res.status(500).send(JSON.stringify({ msg: 'Internal ServerError' }));
                })
    }

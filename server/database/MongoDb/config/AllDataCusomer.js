const { customer } = require('./db_buildSchema');
module.exports = async () => {
    const allDataCustomer = [
        {
            customer_id:1,
            firstname: 'alaa',
            lastname: 'badra',
            email: 'alaabadra4@gmail.com',
            password: '$2a$05$6Q1VE6DzhS8Z2pBr1VEPv.sM2dWPKacPv9GFC5M1.auGPlbab38aK',
            
            
        }, {

            customer_id:2,
            firstname: 'ala',
            lastname: 'tare',
            email: 'aa@hotmail.com',
            password: '$2a$05$xuOTwN1iWrraW7Og7cVAWu00RUpEXg6AV8X3Mz8cIUoQcT952FJ7e',
       
            
        }, {
            customer_id:3,
            firstname: "alaa",
            lastname: 'bad',
            email: 'dim@gmail.com',
            password: '$2a$05$mjKkeAAMAaEsORbu.ZQKQurq4nr3pW3n524uwz9uQBrwLt3iGMAQG',
            
        }, {
            customer_id:4,
            firstname: 'ala',
            lastname: 'tare',
            email:'bbb@hotmail.com',
            password: '$2a$05$rZ6MiHZcvdMzVwTyJsyJf.o.CXVgP0xt72NO0JzPL3o4uYtSfgJ9C',
         
            
        },
        {
            customer_id:5,
            firstname: 'eng-alaa',
            lastname:'bader',
            email: 'engineeralaa@gmail.com',
            password: '$2a$05$sWby.qnZokVSoPhWK4Awreo93rnX4OpLUDEhti.cOs5vLCJ8cmqsq',
            
            
        }
    ]

    return customer.create(allDataCustomer)
}

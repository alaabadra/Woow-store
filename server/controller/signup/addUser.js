const { sign } = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { addUser } = require('../../database/queries/signup/addUser');
const { checkEmail } = require('../../database/queries/authuntication/checkEmail');

module.exports = (req, res, next) => {
    const memberInfo = { ...req.body };
    console.log('mem', memberInfo.email);

    checkEmail(memberInfo.email)
        .then(result => {
            console.log('resultdb', result.rows[0]);

            if (result.rows[0]) {
                console.log('The Email already exists  ');
                
                // res.status(400).send({ msg: 'The Email already exists  ' });
            } else {
                console.log(8888);
                
                bcrypt.hash(memberInfo.password, 5, (error, hash) => {
                    if (error) {
                        res.status(500).send(JSON.stringify({ error: 'Internal Server Error' }));
                    } else {
                        if (hash) {
                            console.log(66666);
                            
                            addUser(memberInfo.firstname, memberInfo.lastname, memberInfo.email, memberInfo.password)
                                .then(resultAdd => {
                                    console.log(2222,resultAdd.rows[0]);
                                    
                                    const { customer_id, email } = { ...resultAdd.rows[0] }
                                    const userInfoEnc = { customer_id, email };
                                    sign(userInfoEnc, process.env.SECRET, (err, result) => {
                                        console.log(555,result);
                                        
                                        console.log('userinfo',userInfoEnc);
                                    let hhh=    res.cookie('JWTUserId', result, {
                                            maxAge: 60 * 60 * 24 * 30,
                                            httpOnly: true,
                                        });
                                        
                                        console.log(999,hhh);
                                        
                                        return res.status(200).send({ error: null, data: userInfoEnc });

                                    });
                                })
                            

                        }


                    }
                })
            }
        })
        res.status(500).send(JSON.stringify({ msg: 'Internal ServerError' }));
};


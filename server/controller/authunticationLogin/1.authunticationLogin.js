const { checkEmail } = require('../../database/queries/authuntication/index');
const { sign } = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
module.exports = (req, res, next) => {
    const memberInfo = { ...req.body }
    if (memberInfo) {
        console.log('memberinfo',memberInfo);
        
        checkEmail(memberInfo.email)
            .then((result) => {
                console.log('result',result.rows);
                
                if (result.rows[0]) {
                    bcrypt.compare(memberInfo.password, result.rows[0].password, (err, valid) => {
                        if (valid) {
                            console.log('valid pass',valid);
                            
                            const { customer_id, email } = { ...result.rows[0] }
                            const userInfoEnc = { customer_id, email };
                            sign(userInfoEnc, process.env.SECRET, (err, result) => {
                                if (err) return res.json({ err });
                                res.cookie('JWTcustomerId', result, {
                                    maxAge: 60 * 60 * 24 * 30,
                                    httpOnly: true,
                                });

                                res.send({ error: null, data: result })
                            });

                        }
                        else {
                            res.status(400).send(JSON.stringify({ msg: 'check your password' }))
                        }

                    })
                } else res.status(400).send({ msg: 'email does not exist ' });
            })
            .catch(() => res.status(400).send(JSON.stringify({ msg: 'Ensure you enter validly data in your email ' })))
    } else {
        res.status(401).send(JSON.stringify({ msg: 'you not authrized in this page' }))
    }
}


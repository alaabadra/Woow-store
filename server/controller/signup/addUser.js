const { sign } = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { addUser } = require('../../database/queries/signup/index');
const { checkEmail } = require('../../database/queries/authuntication/index');

module.exports = (req, res, next) => {
    const memberInfo = { ...req.body };
    checkEmail(memberInfo.email)
        .then(result => {
            if (result.rows[0]) {
                res.status(400).send({ msg: 'The Email already exists  ' });
            } else {
                bcrypt.hash(memberInfo.password, 5, (error, hash) => {
                    if (error) {
                        res.status(500).send(JSON.stringify({ error: 'Internal Server Error' }));
                    } else {
                        if (hash) {
                            addUser(memberInfo.customer_id, memberInfo.firstname, memberInfo.lastname, memberInfo.email, memberInfo.password)
                                .then(resultAdd => {
                                    const { customer_id, email } = { ...resultAdd.rows[0] }
                                    const userInfoEnc = { customer_id, email };
                                    sign(userInfoEnc, process.env.SECRET, (err, result) => {
                                        res.cookie('JWTCustomerId', result, {
                                            maxAge: 60 * 60 * 24 * 30,
                                            httpOnly: true,
                                        });

                                        return res.status(200).send({ error: null, data: userInfoEnc });

                                    });
                                })
                                .catch(() => res.end('internal server error , there is duplicate id user '))

                        }


                    }
                })
            }
        })
        .catch(() => res.end('internal server error'))
};


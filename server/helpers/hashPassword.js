const bcrypt = require('bcryptjs');
exports.hashPassword = (req, res, next) => {
  bcrypt.hash(req, 5, (error, hash) => {
    if (error) {
      res.status(500).send(JSON.stringify({ error: 'Internal Server Error' }));
    } else {
        hash;
        return hash
    }
  });
};



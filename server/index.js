const http = require('./app');

const port = process.env.PORT || 5500;

http.listen(port, () => {
  console.log(`server is running on port:${port}`);
});

module.exports=http;

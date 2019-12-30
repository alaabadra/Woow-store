
const {Pool} = require('pg');
const {parse}=require('url');
require('dotenv').config();
let {DATABASE_URL}=process.env;
const {
MAX_DB_CONNECTION, NODE_ENV, hostname
} = process.env;

const params = parse(DATABASE_URL);
console.log('ppp',params);
const {
hostname: host, port, pathname, auth
} = params;
const [user, password] = auth.split(':');
const options = {
host,
port,
user,
password,
database: pathname.split('/')[1],
max: MAX_DB_CONNECTION || 2,
ssl: hostname !== 'localhost'
};
console.log('ooo',options);
const pool = new Pool(options);
module.exports = pool;


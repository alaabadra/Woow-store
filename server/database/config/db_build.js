const {readFileSyc} = require('fs');
const {join} = require('path');
const connection = require('./db_connection');

function dbBuild(){
    const sql= readFileSyc(join(__dirname,'db_build.sql'));
    return connection.query(sql);
}

function dbFakeData(){
    const sql= readFileSyc(join(__dirname,'db_fakeData.sql'));
    return connection.query(sql);
}

module.exports = {dbBuild,dbFakeData};

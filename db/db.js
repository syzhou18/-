const {DBHOST,DBPORT,DBNAME} = require('../config/config.js');

module.exports = function(success,error){

    const mongoose = require('mongoose');

    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);
    
    //設置連接成功的回調
    mongoose.connection.once('open',() => {
        success();
        console.log('成功');    
    });
    //設置連接錯誤的回調
    mongoose.connection.on('error',() => {
        error();
        console.log('錯誤');
    });
    //設置連接關閉的回調
    mongoose.connection.on('close',() => {
        console.log('關閉');
    });
}


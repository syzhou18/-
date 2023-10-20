const mongoose = require('mongoose');

//創建文檔的結構對象
let accountSchema = new mongoose.Schema({
    what:String,
    time:Date,
    type:Number,
    much:Number
});

//創建模型對象
let accountModel = mongoose.model('accounts', accountSchema);

module.exports = accountModel;
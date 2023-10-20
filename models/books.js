const mongoose = require('mongoose');

//創建文檔的結構對象
let BookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:String,
    price:Number,
    is_hot:Boolean,
    tags:Array
});

//創建模型對象
let BookModel = mongoose.model('novels', BookSchema);

module.exports = BookModel;
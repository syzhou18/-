var express = require('express');
var router = express.Router();

const shortid = require('shortid')
const moment = require('moment');
const accountModel = require('../models/accountModel');


//記帳本列表
router.get('/account', function(req, res, next) {
  accountModel.find().sort({time:-1})
  .then((data)=>{
    //console.log(data);
    res.render('list',{account:data,moment:moment});
  })
  .catch(fail=>{
    console.log(fail);
  })
  
});
//添加紀錄
router.get('/account/create', function(req, res, next) {
  res.render('add');
});

router.post('/account', function(req, res, next) {
  //console.log(req.body);

  let id = shortid.generate();

  accountModel.create({
      ...req.body,
      time:moment(req.body.time).toDate()
  }).then((data)=>{
    res.render('success',{msg:'添加成功',url:'/account'});
  });

});

router.get('/account/:id', function(req, res, next) {

  let id = req.params.id;
  console.log(req.params);
  accountModel.deleteOne({_id:id})
  .then((data)=>{
    res.render('success',{msg:'刪除成功',url:'/account'});
  })
  .catch(fail=>{
    console.log(fail);
  })
  //db.get('account').remove({id:id}).write();

  
});

module.exports = router;

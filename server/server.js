const express = require('express');
const mongoose = require('mongoose');

//连接mongoose 并且使用imooc这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
    console.log('mongo connect success');
});

//类似于mysql的表 mongo里有文档、字段的概念
const User = mongoose.model('user',new mongoose.Schema({
    user:{type: String,require:true},
    age:{type: Number,require:true}
}));

//新增数据
// User.create({
//     user:'xiaohua',
//     age: 12
// },function(err, doc){
//     if(!err){
//         console.log(doc);
//     }else{
//         console.log(err);
//     }
// });

//删除数据
// User.remove({age:18},function(err,doc){
//     console.log(doc);
// });

//更新数据
User.update({'user':'xiaoming'},{'$set':{age:26}},function(err,doc){
    if(!err){
        console.log(doc);
    }else{
        console.log(err);
    }
});

//新建App
const app = express();

app.get('/',function(req,res){
    res.send('<h1>Hello World</h1>');
});

app.get('/data',function(req,res){
    // 查询数据
    User.findOne({user:'xiaoming'},function(err,doc){
        res.json(doc)
    });
});

app.listen(9093,function(){
    console.log('Node app start at port 9093');
});
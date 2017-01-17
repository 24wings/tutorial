import * as express from 'express';
import * as bodyParser from 'body-parser';

var app =express();


    
// 解析请求体
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}));


// 设置视图存放的文件夹
app.set('views',__dirname+'/views')

//  视图的渲染引擎
app.set('view engine','ejs');


// 对于任何请求渲染index页面
app.all('/',(req,res,next)=>{
    //渲染并发送渲染后的页面
    
res.render('index',{username:req.body.username});
});





app.listen(3000,()=>{
    console.log('server run ing  on 3000');
});

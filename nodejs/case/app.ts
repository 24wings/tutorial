import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as ejs from 'ejs';
import  router from './app.routes';
import adminRouter from './admin.routes';
var app =express();


    
// 解析请求体
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}));


// 设置视图存放的文件夹
app.set('views',__dirname+'/views')

//  视图的渲染引擎
app.set('view engine','html');

// 用ejs的渲染方式去渲染html文件
app.engine('.html',ejs.renderFile);


app.use(express.static(__dirname+'/public'));
// 对于任何请求渲染index页面
app.use('/',router);
app.use('/admin',adminRouter)




app.listen(3000,()=>{
    console.log('server run ing  on 3000');
});

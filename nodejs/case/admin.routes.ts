import * as express from 'express';
var adminRouter = express.Router();

adminRouter.all('/',(req,res,next)=>{
    res.render('admin/index.html');

});

export default adminRouter;
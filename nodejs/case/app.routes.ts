import * as express from 'express';
var router = express.Router();
var data = require('./data');
router.all('/',(req,res,next)=>{
    res.render('content/index',data);
});
export default router;
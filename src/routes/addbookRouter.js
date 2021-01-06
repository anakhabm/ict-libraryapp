const express = require('express');
const addbookRouter = express.Router();
function router(nav){
    
    addbookRouter.get('/',function(req,res){
        res.render("addbooks",
        {
            nav,
            title:'Library',
        });
    });
    
    return addbookRouter;
}

module.exports=router;
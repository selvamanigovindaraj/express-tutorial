var express = require ('express');
var router = express.Router();

router.get('/:id([0-9]{4})',function(req,res){
    res.send('router is sent with id :'+req.params.id)
});
router.post('/',function(req,res){
    res.sent('roter posted')
});
router.get('*',function(req,res){
    res.send('404 not found')
});
module.exports = router;
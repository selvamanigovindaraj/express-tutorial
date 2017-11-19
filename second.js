

var express = require ('express');
var app = express();

app.set('view engine', 'pug');
app.set('new-view', './new-view');

// app.get('/dynamic', (req, res,next) => {
//     res.render('./new_temp',{
//         name:'first',
//         url:""
//     });
//     next();
// });
app.use(express.static('public'));
app.get('/img',(req,res)=>{
    res.render('./new_temp')
});

app.listen(3200);
var express = require ('express');
var app = express();

app.use(function(req,res,next){
    console.log('first is printed');
    next();
});

app.get('/', (req, res,next) => {
    res.send('value');
    // console.log('mid')
    next();
});

app.use('/',(req,res)=>{
    console.log('end')
});
app.listen(3200, () => {
    console.log(`Server started on port`);
});
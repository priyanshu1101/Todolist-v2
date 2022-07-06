const bodyParser = require('body-parser');
const express=require('express')
const app=express();
const port=3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}))


const options = { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric'};
var date=new Date();
var items=[];

app.get('/',function(req,res)
{
    res.render('list',{day:date.toLocaleDateString('en-us',options),itemlist:items});
})

app.post('/',function(req,res)
{
    items.push(req.body.item);
    res.render('list',{day:date.toLocaleDateString('en-us',options),itemlist:items});
})

app.listen(port) 
{
    console.log("Listening to port :"+port);
}
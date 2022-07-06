const bodyParser = require('body-parser');
const express=require('express')
const app=express();
const port=3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static("public"));


const options = { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric'};
var date=new Date();
var items=[];
var workitems=[];

app.get('/',function(req,res)
{
    res.render('list',{list_heading:date.toLocaleDateString('en-us',options),itemlist:items});
})

app.post('/',function(req,res)
{
    if(req.body.list=="Work")
    {
        if(req.body.item.trim()!="")
        workitems.push(req.body.item.trim());
        res.redirect("/work");
    }
    else{
        if(req.body.item.trim()!="")
        items.push(req.body.item.trim());
        res.redirect("/");
    }
})

app.get('/work',function(req,res)
{
    res.render('list',{list_heading:"Work",itemlist:workitems});
})

app.listen(port) 
{
    console.log("Listening to port :"+port);
}
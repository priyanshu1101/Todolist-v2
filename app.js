const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const _ = require('lodash');
const date = require(__dirname + "/date.js"); //Custom module

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));


// mongoose.connect("mongodb://localhost:27017/todolist-v2");   //local mongoDB
mongoose.connect("mongodb+srv://priyanshu1101:priyanshu1101@cluster0.bhvsw.mongodb.net/todolist-v2")


const taskSchema = {  //npm install mongoose
    task: String
};

const task = mongoose.model("task", taskSchema);

const listSchema = {
    listName: String,
    items: [taskSchema]
};

const list = mongoose.model("list", listSchema); //list-name of the collection


// const port = 3000; //For local system
const port = process.env.PORT; //For Heroku


app.get('/', function (req, res) {
    const today = "" + date.getDate();
    task.find({}, function (err, data) {
        if (!err) {
            res.render('list', { list_heading: today, itemlist: data });
        }
    });
})

// app.post('/', function (req, res) {
//     if (req.body.item.trim() != "") {
//         const taskitem = new task({
//             task: req.body.item.trim()
//         });
//         taskitem.save();
//     }
//     res.redirect("/");
// })

// app.post('/delete', function (req, res) {
//     task.deleteOne({ _id: req.body.task }, function (err) {
//         if (err)
//             console.log(err);
//     })
//     res.redirect("/");
// })

app.get('/:listname', function (req, res) {
    const today = "" + date.getDate();
    if (req.params.listname.trim() != today.toLowerCase()) {
        const listname = _.upperFirst(req.params.listname);
        list.findOne({ listName: listname }, function (err, foundList) {
            if (!err) {
                if (foundList) {
                    res.render('list', { list_heading: listname, itemlist: foundList.items });
                }
                else {
                    res.render('list', { list_heading: listname, itemlist: [] })
                }
            }
        });
    }
    else {
        res.redirect('/');
    }
})

app.post('/:listname', function (req, res) {
    console.log(req.body);
    const today = "" + date.getDate();
    var listname = req.params.listname;
    if (listname == today) {
        if (req.body.item.trim() != "") {
            const taskitem = new task({
                task: req.body.item.trim()
            });
            taskitem.save(function (err) {
                if (!err) {
                    res.redirect("/");
                }
            });
        }
    }
    else {
        listname = _.upperFirst(listname);
        const item = new task({
            task: req.body.item.trim()
        });
        list.findOne({ listName: listname }, function (err, foundList) {
            if (!err) {
                if (!foundList) {
                    const listitem = new list({
                        listName: listname,
                        items: [item]
                    })
                    listitem.save(function (err) {
                        if (!err) {
                            res.redirect('/' + listname);
                        }
                    });
                }
                else {
                    list.updateOne({ listName: listname }, { $push: { items: item } }, function (err, data) {
                        if (!err) {
                            res.redirect('/' + listname);
                        }
                    })
                }
            }
        })

    }
})

app.post('/delete/:listname', function (req, res) {
    const today = "" + date.getDate();
    if (req.params.listname == today) {
        task.deleteOne({ _id: req.body.task }, function (err) {
            if (!err) {
                res.redirect("/");
            }
        })
    }
    else {
        const listname = _.upperFirst(req.params.listname);
        list.findOne({ listName: listname }, function (err, findData) {
            if (!err) {
                list.updateOne({ listName: listname }, { $pull: { items: { _id: req.body.task } } }, function (err, updateData) {
                    if (!err) {
                        if (findData.items.length == 1) {
                            list.deleteOne({ listName: listname }, function (err, deleteData) {
                                if (!err) {
                                    res.redirect("/" + listname);
                                }
                            })
                        }
                        else {
                            res.redirect("/" + listname);
                        }
                    }
                })
            }
        })
    }
})

app.listen(port || 3000)
{
    console.log("Listening to port :" + port);
}
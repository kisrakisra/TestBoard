var Todo = require('./models/todo');
var Prop = require('./models/prop');

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function (req, res) {

        // use mongoose to get all todos in the database
        Todo.find(function (err, todos) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(todos); // return all todos in JSON format
        });
    });

    app.post('/api/todos', function (req, res) {
        // create a todo, information comes from AJAX request from Angular

        Todo.create({
            text: req.body.text,
            detail: req.body.detail,
            assign: req.body.assign,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);
            // get and return all the todos after you create another
            Todo.find(function (err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function (err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });

    
    // get props

    app.get('/api/props', function (req, res) {

        // use mongoose to get properties in the database 
        Prop.find(function (err, props) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(props); // return all properties in JSON format
        });
    });

    //// crete prop and get prop after creation
    //app.post('/api/props', function (req, res) {
    //    // create prop, information comes from AJAX request from Angular
    //    var reqBody = req.body,
    //    propObj = {
    //        appName: reqBody.appName,
    //        appVersion: reqBody.appVersion
    //    };

    //    var prop = new Prop(propObj);
    //    prop.save(function (err, doc) {
    //        if (err || !doc) {
    //            throw 'Error';
    //        }
    //        else {
    //            Prop.find(function (err2, props) {
    //                if (err2)
    //                    res.send(err2);
    //                res.json(props);

    //            });
    //        }

    //    });
    //});

    //// create todo and send back all todos after creation

    
    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
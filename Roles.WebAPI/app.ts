import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
import mongoose = require('mongoose');

import rolesRoute from './routes/roles';

var app = express();

// pug view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use('/api/roles', rolesRoute);

// connect to mongo
mongoose.connect('mongodb://localhost:27017/UserRoles');

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err: any, req, res, next) => {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err: any, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;

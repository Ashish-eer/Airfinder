var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./appserver/routes/index');
var usersRouter = require('./appserver/routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'appserver', 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use your routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page with a title
  res.status(err.status || 500);
  res.render('error', {
    title: 'Error'  // Fix: add title for error page
  });
});

// You don't need this catch-all at the bottom as you already have a 404 handler
// app.use((req, res) => {
//   res.status(404).send('404 Not Found');
// });

module.exports = app;
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


 //db connection
 var mongoose = require('mongoose'); 
 var dev_db_url = 'mongodb://<Teemu>:<Kumiankka66>@ds255319.mlab.com:55319/wwwharjoitus'; 
 var mongoDB = process.env.MONGODB_URI || dev_db_url; 
 mongoose.connect(mongoDB); 
 mongoose.Promise = global.Promise; 
 var db = mongoose.connection; 
 db.on('error', console.error.bind(console, 'MongoDB connection error:')); 

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));	//kauttaviiva vaihdettu publicin eteen

app.use('/', indexRouter);
app.use('/users', usersRouter);

//jossun lisäämät

app.get('/', function (req, res) {
  res.render('mainpage');
});

/*app.get("/", (req, res) => {
    res.render("mainpage.pug");
	
}); */

/*router.get("/", (req, res) => {
    res.render("mainpage", {
        user: req.user
    });*/


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');

var itemsRouter = require('./routes/items')

var questionsRouter = require('./routes/questions')

const mongoose = require('mongoose')

const admin = require("firebase-admin");

mongoose.Promise = global.Promise

mongoose.connect("mongodb+srv://CocleApp:Conan1990@apiproject-wdwoa.mongodb.net/User?retryWrites=true",{
  userNewUrlParser: true
}).then(()=>{
  console.log("conectada");
}).catch((err)=>{console.log(err,"no se puede");
});

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "projectpdmdb",
    clientEmail: "firebase-adminsdk-xqk5x@projectpdmdb.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQCcrQVUiuq/dE+2\nBusNiwct1NwTSFbSrU8Z66L51xZASzZ+MKtvGQhqU0Th0WU4z4+tJW06FBsF/3KV\nA3uhGYvnlNmxn8IvIyYVVzFUtSLo7J270SNg6YMwOwSPEjnBQ2loUA8d14vx2uGZ\nRIkcZHMtuJy0QFw1OoQQJtDg827C9ktUxFjIJRbNjJIQOna1UG/Yk4wUh46mRN4V\nMQZ0P29rcE4EkxsvlGn3JFUmj+PV971FzLpU1Z7KzqP4nsM96x0jXEU+Xm9OLOUG\nYgQKnberS3oRmFhi5S9u7CWHzzTEip2899bYDYV283b+TU5Uv79vf5Lj5tKXGoAB\nfQJOHQtRAgMBAAECgf8H2McZRyT6qJiejl63WBF61ZLm9p0ZcBShif3x4MqzW1of\nUz5nWyvjAsieGPoUQuNBiLnCAS1932jCRKpjS7aIWYeNnddJl12jM/q7XsTFZaal\nSpQovUAUxbtZSnT1ePP8PE9g7zz3n/WaQKbB4LO/ewinR5Ho8/wpQKPaDg307IOz\nURrxjER22/Uw1FGs6kmIkLdiiQ4pusPD7Q3nYo1gEJ3jYMeT9Wrsl057Io2QQ9qS\npdEWJfMWanR2xTWPbbenlHTqt+0ldwf/k4UV29vPo4fwIW9ns2ka1T9/tHHjCVzl\njKqH6RIgjE/auRNePkbrAKovqqD+SYm289we7b0CgYEA0IRs/axLOwfZLuF5ym3Q\nJ8n+tWTn+1no2Fkce1k3Qop5fPBHipkImP1szCq9aN5Zi4GXYz/T8m7NpLEsQj/X\nYUznZeyHszaKXU7R8jDsBbIIeW4KTtIA/Qcx3zIy1CJO2C8uD3p2c8zP89IUToTn\n4RSLCMFXCAR1kco6axLNOi0CgYEAwFp8CZwAbmzjS13Jv2+/x0y2W5oyPVTu77sf\n/QhHF0gpmxuHrf13OUloxCh88afRwuiLsIiDcuHmejEfLhci3otZsQh1UbBEa+0J\npRXgc2T9a37QCNp6D8dpEVuK9fpQdOGLMt0hhG9uLWjaIO9E7PaH7FZrjOh2qyWf\nOzQgADUCgYAzDZlZ6stoop1MWyxkocprU4unghNCeVsHTZopoUhkZF8mdfYuOxXd\nz37J5lUFzhsCizIzvLb6DqMPBcoeVl83lYq6a9U1zc7G1buVnuDK7DIi+QxRDB3t\n1csiKLpFMjk3uSV/6K4D4EuyGOeb6fKUK2F3PU8/yUe38FmpSasx6QKBgHc33cbq\n7I2EaX/tujwvm9J/pkqyEE9ZE9p7xUDD36P7cuYSsw5QmZNk/00Mtxvj4quGDAY3\nJhmPD5VOWr/rUQ5TmhySXHxr3oxx1td97qY2wqbcaz4Bg0PCWUmLzl3UbgdzPx4g\nVkTJ96SnZwKgqbygs+/0RCaKcfpzj/RWwzq9AoGBAJpa6BO1fkoOcliXUcC6WdiR\nDr1lNRH7JIMQ5/4gKxbaOBnvc88+sdzrzA2P/wWNBIK2iJ3mldRaW6UMHK0SyKDj\na3b5WOCCEKApDKag/gcOBR9XtI12scXDXN/NxAd6OoFv4NopvN571UzqzfWoh24N\nMsCRhQ0yIePanwGeBMBT\n-----END PRIVATE KEY-----\n"
  }),
  databaseURL: "https://projectpdmdb.firebaseio.com"
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/cocleapp', usersRouter);
app.use('/cocleappi', itemsRouter)
app.use('/cocleappq', questionsRouter)

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
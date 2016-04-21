var express = require('express'),
    routes  = require('./routes'),
    // http    = require('http'),
    path    = require('path');

var app = module.exports = express();

app.engine('html', require('ejs').renderFile)



app.set('views', __dirname + '/public/views');
app.set('view engine', 'html');
// app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/stylesheet",  express.static(__dirname + '/public/stylesheet'));
// app.use("/stylesheet",  express.static(__dirname + '/public/stylesheets/partials'));
app.use("/js", express.static(__dirname + '/public/js'));
app.use("/assets", express.static(__dirname + '/public/assets'));
// app.use("/images",  express.static(__dirname + '/public/images'));



/********
 * Routes
 ********/

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);





app.listen(9000);

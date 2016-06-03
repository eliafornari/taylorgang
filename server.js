var express = require('express'),
    routes  = require('./routes'),
    // http    = require('http'),
    path    = require('path');

var app = module.exports = express();

app.engine('html', require('ejs').renderFile);

app.set('views', __dirname + '/public');
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






  app.get('*', function(req, res){

    console.log('/// here to keep track of how many times this is called');
    console.log('Instagram code: ', req.query.code);

    var data = {
     'url': url,
     'client_id' : '020b8c7147bd4f2093c5db356cb51200',
     'client_secret' : 'd43a307e5d78404b88d381d4b18afdfa',
     'grant_type' : 'authorization_code',
     'redirect_uri' : 'YOUR-REDIRECT-URI',
     'code' : req.query.code
    };

    var url = 'https://api.instagram.com/oauth/access_token';

    req.post({
    method: 'POST',
    url: url,
    body: JSON.stringify(data),
    },
    function (e, r, body) {

      console.log(e);
      console.log(r);
      console.log("body"+body);
      //body will contain the access_token
     });


  });









app.listen(9000);

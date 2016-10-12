var express = require('express');
var bodyParser = require('body-parser');
var movieCtrl = require('./controllers/movieCtrl');

var app = express();
app.use(bodyParser.json());

app.get('/api/movies', movieCtrl.get);
app.get('/api/movies/:movieId', movieCtrl.getById)
app.put('/api/movies/:movieId', movieCtrl.modify)
app.post('/api/movies', movieCtrl.add);
app.delete('/api/movies/:movieId', movieCtrl.delete);


var port = 3000;
app.listen(port, function(){
    console.log('listening on ' + port);
})

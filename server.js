const express = require('express');
const server = express();

const bodyParser = require('body-parser');
const cors = require('cors');

server.listen(3000, () => {
  console.log('start server');
});

server.use(cors());
server.use(express.static('views'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.set('views', __dirname + '/views');
server.set('view engine', 'jsx');
server.engine('jsx', require('express-react-views').createEngine());

server.get('/', require('./routes').index);

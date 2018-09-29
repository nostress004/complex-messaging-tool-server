const express = require('express');
const app = express();

// middlewares
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send('Hello world');
});

server = app.listen(3000);

// socket.io instantation
const io = require('socket.io')(server);

// listen on every connection
io.on('connection', socket => {
  console.log('New user connected');
});

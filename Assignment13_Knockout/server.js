const express = require('express');
const server = express();
const port = 3000;
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get('/person.json', (req, res) => {
    res.sendFile(__dirname + "/person.json");
});

server.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

server.get('/index.html', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

server.get('/js/main.js', (req, res) => {
    res.sendFile(__dirname + "/js/main.js");
});

server.listen(port, () => {
    console.log(`http://localhost:${port} server started`);
});

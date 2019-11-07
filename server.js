const express = require('express');
const helmet = require('helmet');
const carsRoutes = require('./cars/carsRoutes.js')
const db = require('./data/dbConfig.js');


const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/cars', carsRoutes)

server.get('/', (req, res) => {
  res.send('<h1>Welcome to car dealer inventory API</h1>')
})


module.exports = server;
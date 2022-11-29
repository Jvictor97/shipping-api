require('dotenv').config();
const { configServer, startServer } = require('./src/main/app');

const start = () => {
  try {
    configServer();
    startServer();
  } catch (error) {
    console.log('Error starting app | Error:', error);
  }
}

start();
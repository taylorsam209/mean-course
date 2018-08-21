// const express = require('express');
// const http = require('http');
// const app = require('./backend/app');

// //This is how you create a server without using the express middleware
// // const server = http.createServer((req, res)=> {
// //   res.end('This is my first response');
// // });
// const port = process.env.PORT || 8080;
// app.set('port', port);
// const server = http.createServer(app);

// server.listen(port|| 8080);


const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");

const server = http.createServer(app);

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "8080");
app.set("port", port);

server.on("error", onError);
server.on("listening", onListening);
server.listen(port, ()=> console.log('listening on port: ' + port));

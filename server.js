const app = require('./app');
const http = require('http');
const appConfig = require('./config/app');

const server = http.createServer(app);

const port = normalizePort(appConfig.port);
app.set('port', port);

function normalizePort(val) {
   let port = parseInt(val, 10);

   if (isNaN(port)) {
      // named pipe
      return val;
   }

   if (port >= 0) {
      // port number
      return port;
   }

   return false;
}

server.listen(port, () => {
   console.log(`Server running on ${appConfig.url}:${appConfig.port}`);
})

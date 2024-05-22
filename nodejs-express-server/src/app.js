import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import apiRouter from './routes/api-routes.js';
import appRouter from './routes/application-routes.js';

// Setup Express
const app = express();
const port = 3000;

// Setup body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Setup cookie-parser
app.use(cookieParser());
app.use(morgan('dev'));

// Make the "public" folder available statically
app.use(express.static('public'));

// Setup our routes
app.use('/', appRouter);
app.use('/api', apiRouter);

// Start the server running. Once the server is running, the given function will be called, which will
// log a simple message to the server console. Any console.log() statements in your node.js code
// can be seen in the terminal window used to run the server.
app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

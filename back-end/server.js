//install dependencies using require method
const {MongoClient} = require('mongodb');
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 8080;

//initialize connectDB
connectDB();
//parse incoming JSON requests 
app.use(express.json());
//import necessary routers
const routes = require('./routes/index');

//listen to all api endpoints and route to root route file (index.js)
app.use('/api', routes );



//create an unknown route handler
app.use((req, res) => res.status(404).sendFile(path.join(__dirname, 'front-end', 'public', '404.html')));


//create a global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred. input invalid' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//listen to port
app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`); 
});

//export app
module.exports = app;
const express = require('express');
const {PORT} = require('./config/server.config');
const apirouter = require('./routes');
const bodyParser = require('body-parser');
const app = express();

// app.get('/home',homePingController); // this much part is routing layer
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text()); 

app.use('/api', apirouter);  //localhost:3000/api/v1/ping             // This is middleware in Express.js


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/**
 * How will u manage these kind of the routes using express router ?
 * 
 * 
 * localhost:3000/api/v1/products/:id
 * localhost:3000/api/v1/categories/:id
 * localhost:3000/api/v2/products/:id
 * localhost:3000/api/v2/categories/:id
 * localhost:3000/api/v2/users/:id
 */



















// previou version example
// nodemon never track .env file so if changes in .env file need to restart the server


// const PORT = process.env.PORT; // port for the server. 
// // const PORT = 3000;

// app.listen(process.env.PORT, () => {

//     console.log(`Server is running on port ${process.env.PORT}`);
// });

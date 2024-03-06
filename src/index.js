const express = require('express');
const dotenv = require('dotenv'); // give the sccess of packaage

dotenv.config(); // start reading the .env file

const app = express();

const PORT = process.env.PORT; // port for the server. 
// const PORT = 3000;

app.listen(process.env.PORT, () => {

    console.log(`Server is running on port ${process.env.PORT}`);
});


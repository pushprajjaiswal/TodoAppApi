const dotenv = require('dotenv'); // give the access of packaage
dotenv.config(); // start reading the .env file

module.exports = {
    PORT:  process.env.PORT
    // EMAIL: process.env.EMAIL
}

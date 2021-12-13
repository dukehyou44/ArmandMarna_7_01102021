const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, '.env')
});

module.exports = {
    NODE_ENV : process.env.NODE_ENV || 'development',
    HOST : process.env.HOST || 'localhost',
    PORT : process.env.PORT || 3000,
    JWT_TOKEN: process.env.JWT_TOKEN,
    USER : process.env.USER,
    PASSWORD : process.env.PASSWORD,
    DB : process.env.DB,
}
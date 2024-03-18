const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' }); // Reads the variables from the file and saves them into the Nodejs env variables

const app = express()

// 1) MIDDLEWARES
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const port = 3000
app.listen(port, () => {
    console.log(`Server has started on port: ${port}`)
})
require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const cors = require('cors');
const models = require('./models/user-models')
const models2 = require('./models/token-models')
const cookieParser = require('cookie-parser')
const router = require('./router/index')

const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json());

app.use(cookieParser());
app.use('/api', router);
app.use(cors());


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()
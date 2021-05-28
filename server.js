const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

dotenv.config()

//Connexion Database
mongoose.connect(process.env.MONGODB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }

).then(() =>console.log('Database connected')).catch((err) => console.log(err))

// app.use('/', (req, res) => res.send('Accueil'))
app.use('/api/auth/', authRoute)

app.listen(8080, () => console.log('server is run port 8080'))
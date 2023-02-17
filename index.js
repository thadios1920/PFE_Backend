const express = require ('express')
const app = express()
const morgan = require('morgan')
const DB = require('./db/dbConnect')
const cors = require('cors')
require('dotenv/config')


const SERVER_PORT = process.env.SERVER_PORT


// avoir la possibiliter de traiter le contenue JSON de requette
app.use(express.json())

//Autoriser au front d'acceder au NodeJS
app.use(cors())
app.options('*', cors)
// Affichage au console de chaque requette
app.use(morgan('tiny'))

// Les routes
const chefProjetRouter = require('./Routes/chefProjetRouter')
const projetRouter = require('./Routes/projetRouter')

// APIs
app.use('/chefProjet',chefProjetRouter)
app.use('/projet',projetRouter)

// Connexion a la base de données 
DB.sync()
.then(console.log("database connected"))
.catch(err=>{console.log(err);})

// Connexion au serveur NodeJS
app.listen(SERVER_PORT,'192.168.1.17',()=>{
    console.log("Server Started : http://localhost:"+SERVER_PORT);
})
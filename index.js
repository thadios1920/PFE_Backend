const express = require ('express')
const app = express()
const morgan = require('morgan')
const DB = require('./db/dbConnect')
require('dotenv/config')


const SERVER_PORT = process.env.SERVER_PORT

app.use(express.json()) // avoir la possibiliter de traiter le contenue JSON de requette

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
app.listen(SERVER_PORT,()=>{
    console.log("Server Started : http://localhost:"+SERVER_PORT);
})
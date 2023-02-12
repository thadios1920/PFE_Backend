const express = require ('express')
const app = express()
const morgan = require('morgan')
const DB = require('./db/dbConnect')
const port = 8080
app.use(express.json()) // avoir la possibiliter de traiter le contenue JSON de requette

// Affichage au console de chaque requette
app.use(morgan('tiny'))

// Les routes
const chefProjetRouter = require('./Routes/chefProjetRouter')
const projetRouter = require('./Routes/projetRouter')

// APIs
app.use('/chefProjet',chefProjetRouter)
app.use('/projet',projetRouter)


DB.sync()
.then(console.log("database connected"))
.catch(err=>{console.log(err);})

app.listen(port,()=>{
    console.log("Server Started : http://localhost:"+port);
})
const express = require ('express')
const app = express()
const DB = require('./db/dbConnect')
const port = 8080

app.use(express.json())


const chefProjetRouter = require('./Routes/chefProjetRouter')

app.use('/chefProjet',chefProjetRouter)


DB.sync()
.then(console.log("database connected"))
.catch(err=>{console.log(err);})

app.listen(port,()=>{
    console.log("Server Started : http://localhost:"+port);
})
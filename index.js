const exprss = require ('express')
const app = exprss()
const port = 8080


const chefProjetRouter = require('./Routes/chefProjetRouter')

app.use('/chefProjet',chefProjetRouter)

app.listen(port,()=>{
    console.log("Server Started : http://localhost:"+port);
})
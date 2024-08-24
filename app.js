const express = require("express")
const handlebars = require("express-handlebars")
const app = express()

//Config
    //Handlebars
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set("view engine", 'handlebars')

//Rota principal
app.get("/", (req, res)=>{
    res.render("index")
})



const PORT = process.env.PORT || 8081 
app.listen(PORT, err => {
    if(err){
        console.log("houve um erro ao iniciar o servidor: "+err)
    }else{
        console.log("servidor rodando na porta: "+ PORT)
    }
})
const express = require("express")
const handlebars = require("express-handlebars")
const app = express()
const path = require('path')

//Config
    //Handlebars
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set("view engine", 'handlebars')

//Rota principal
app.get("/", (req, res)=>{
    res.render("home")
})
app.get("/calculadora", (req, res)=>{
    res.render("calculadora")
})



const PORT =  8081 
app.listen(PORT, err => {
    if(err){
        console.log("houve um erro ao iniciar o servidor: "+err)
    }else{
        console.log("servidor rodando na porta: 8081")
    }
})
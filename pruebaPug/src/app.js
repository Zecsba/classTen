import express from "express"
import __dirname from "./utils.js"

const app = express()

const server = app.listen(8080, () => console.log('Listening on 8080'))

let users = [
    {primer_nombre: "Sebastian", apellido: "Casallas"},
    {primer_nombre: "Sebastian", apellido: "Casallas"},
    {primer_nombre: "Sebastian", apellido: "Casallas"},
    {primer_nombre: "Sebastian", apellido: "Casallas"},
    {primer_nombre: "Sebastian", apellido: "Casallas"}
]

// app.set(__dirname + 'views')
// app.set('views', './views')

app.set('views', './src/views')
app.set('view engine', 'pug')

app.get('/', (req, res)=>{
    res.render('welcome.pug',{
        message:"Papa con queso"
    })
})

app.get('/datos', (req, res) => {
    let {min, max, value, title} = req.query;
    res.render('medidor.pug', {
        min,
        max,
        value,
        title
    })
})
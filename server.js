const express = require('express')
const app = express()
const fileHandler = require('./modules/fileHandler');
const PORT = 4000

app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine','ejs')

app.get('/', async (req, res) => {
    const employees = await fileHandler.read();
    console.log(employees); 
    res.send("Check terminal for employee data");
});

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
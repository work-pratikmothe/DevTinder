const express = require('express');

const app = express();

const PORT = 3000;


app.use('/hello',(req , resp) => {
    resp.send("Hello hello!")
})

app.use('/hello/2',(req , resp) => {
    resp.send("Hello hello! 2")
})

app.use('/',(req , resp) => {
    resp.send("Hello !")
})

app.listen(PORT,() => {
    console.log(`Server started on ${PORT}`)
})
const express = require('express')
const app = express()
const fs = require('fs');


app.get('/', (req, res) => {

    fs.readFile('file1.txt', 'utf8', (err, data) => {
       res.send(data)
      });
     
})
app.get('/route2', (req, res) => {

    fs.readFile('file2.txt', 'utf8', (err, data) => {
       res.send(data)
      });
     
})
app.get('/route3', (req, res) => {

    fs.readFile('file3.txt', 'utf8', (err, data) => {
       res.send(data)
      });
     
})


app.listen(3000, () => {
   console.log("Server is Running at port 3000")
})
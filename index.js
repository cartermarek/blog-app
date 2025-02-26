const express = require('express')
const path = require('path')

const app = new express()
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.SendFile(path.resolve(__direname, 'pages/index.html'))
})

app.get('/about', (req, res) => {
    res.SendFile(path.resolve(__dirname, 'pages/about.html'))
})

app.get('/post', (req, res) => {
    res.SendFile(path.resolve(__dirname, 'pages/post.html'))
})

app.get('/contact', (req, res) => {
    res.SendFile(path.resolve(__dirname, 'pages/contact.html'))
})

app.listen(4000, ()=>{
    console.log("App is listening on port 4000")
})
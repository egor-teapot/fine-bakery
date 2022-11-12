const express = require('express')
const app = express()
const PORT = 4127
const path = require('path')
const views = path.join(__dirname, '../client/views/')

app.use('/css', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/css')))

app.get('/', (req, res) => {
    res.sendFile(views + 'root.html')
})

app.get('/login', (req, res) => {
    res.sendFile(views + 'login-register/login.html')
})

app.listen(PORT, () => {
    console.log(`server runnig on port ${PORT}`)
})

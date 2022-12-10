const express = require('express')
const app = express()
const PORT = 4127
const path = require('path')
const views = path.join(__dirname, '../client/views/')

const loginRoute = require('./routes/login')
const dbRoute = require('./db/db')

app.use('/css', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/css')))
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.sendFile(views + 'root.html')
})

app.use('/login', loginRoute)
app.use('/api/db', dbRoute)

app.listen(PORT, () => {
    console.log(`server runnig on port ${PORT}`)
})

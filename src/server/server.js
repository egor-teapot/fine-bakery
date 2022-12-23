const express = require('express')
const app = express()
const PORT = 4127 // порт на котором запускается сайт
const path = require('path') // встроеная библиотека для работы с путями файлов

// роуты страниц
const loginRoute = require('./routes/login')
const toolsModerationRoute = require('./routes/moderation')
const registerRoute = require('./routes/register')

app.set('views', path.join(__dirname, '../client/views')) // устанавливает папку для вьюх
app.set('view engine', 'ejs') // устанавливает движок для отрисовки вьюх
app.set('title', 'fine-bakery') // устанавливает название сайта(не работает)

app.use('/css', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/css'))) // устанавливает путь к css
app.use(express.json()) // позволяет серверу читать json
app.use(express.urlencoded()) // позволяет серверу читать urlencoded

app.get('/', (req, res) => {
    res.render('root')
})

// подключает роуты страниц к конкретному пути 
app.use('/login', loginRoute)
app.use('/tools/moderation', toolsModerationRoute)
app.use('/register', registerRoute)

// запускает сервер
app.listen(PORT, () => {
    console.log(`server runnig on port ${PORT}`)
})

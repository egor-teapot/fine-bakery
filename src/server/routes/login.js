const { Router } = require('express')
const router = Router()
const realm = require('../../db/db')

router.get('/', (req, res) => {
    res.render('login-register/login')
})

// принемает post с формы
router.post('/', (req, res) => {
    realm
    .then(realm => {
        const collection = realm.objects("User")        
        // проверка логина и пароля при помощи итератора
        // при удачной верефикации редиректит на страницу модерации
        for (const [index, element] of collection.entries()) {
            if (element.name == req.body.name && element.password == req.body.password) {
                return res.redirect('tools/moderation')
            } else {
                return res.render('login-register/login')
            } // if
        } //for
    }) // realm =>
})

module.exports = router
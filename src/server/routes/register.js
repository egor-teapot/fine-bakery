const { Router } = require('express')
const router = Router()
const realm  = require('../../db/db')
const Realm = require('realm')
const { UUID } = Realm.BSON

router.get('/', (req, res) => {
    res.render('login-register/register')
})


router.post('/', (req, res) => {
    const form = req.body
    const userQuerry = `name == "${form.name}" && email == "${form.email}" || password == "${form.password}"`
    realm
        .then(realm => {
            const collection = realm.objects("User")
            if(collection.filtered(userQuerry).length >= 1) return console.log('user already exists')
            realm.write(() => {
                realm.create("User", {
                    _id: new UUID,
                    name: form.name,
                    email: form.email,
                    password: form.password,
                    role: "user"
                }) // create User
            }) // write
        })
        // .catch(err => console.log(`error in register user create \n ${err}`))
    res.render('login-register/register')
})

module.exports = router
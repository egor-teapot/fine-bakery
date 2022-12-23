const { Router } = require('express')
const router = Router()
const realm = require('../../db/db')
const Realm = require('realm')
const { UUID } = Realm.BSON

router.get('/', (req, res) => {
    realm
        .then(realm => {
            // realm.objects("User")
            const collection = realm.objects("User")
            const user = collection.map(item => item)
                res.format({
                html: () => {
                        res.render('tools/moderation', {user}) //render
                    } // html arrow func
                }) //format
            
        })
}) //get



// router.get('/:uuid', (req, res) => {
//     const { uuid } = req.params
//     realm
//         .then(realm => {
//             realm.objects("User")
//             const collection = realm.objects("User")
//             const user = (collection.filtered(`_id == uuid(${uuid})`))
//             res.format({
//                 html: () => {
//                     res.render('tools/moderation-user-form', {user})
//                 }
//             })
//             })
// })

router.get('/create/user', (req, res) => {
    // console.log(JSON.stringify(req.body))
    res.render('tools/moderation-user-create')
})

router.post('/create', (req, res) => {
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
                role: form.role
            }) // create User
        }) // write
    })
})

router.post('/update', (req, res) => {
    // console.log(req.body)
    const { uuid, name, email, password, role } = req.body
    realm
        .then(realm => {
            realm.write(() => {
                const collection = realm.objects("User")
                const user = (collection.filtered(`_id == uuid(${uuid})`))

                user[0].name = name
                user[0].password = password
                user[0].email = email
                user[0].role = role
            }) // realm write

        }) // realm then
}) // post


router.post('/delete', (req, res) => {
    // console.log(req.body)
    const { uuid } = req.body
    realm
        .then(realm => {
            realm.write(() => {
                const user = realm.objects("User").filtered(`_id == uuid(${uuid})`)
                realm.delete(user)
            }) // realm delete
        }) // realm then
    res.redirect('tools/moderation')
})

module.exports = router
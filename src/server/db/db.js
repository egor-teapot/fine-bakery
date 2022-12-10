// const { Router } = require('express')
// const mysql = require('@mysql/xdevapi')
const mysql = require('@mysql/xdevapi')
// const router = Router()

const config = {host: 'localhost', 'port': 33060, user: 'root', password: '12345678' }

const session = mysql.getSession({user: config.user, password: config.password})
    .then(session => {
        return session.getSchema('fine_bakery')
        // .then(res => {
        //     console.log(res.fetchAll())
        // })
        // .then(collection => {
        //     return collection.getOne(1)
        //         .execute()
        // })
        // return session.close()
    })
    .then(schema => {
        return schema.getTable('roles')
            .select(['id'])
            .execute()
            .fetchAll()
    }).catch(error => console.log('error on table' + '\n' + error))
    .then(msg => console.log(msg))
// console.log(session)



// for (i in session) {
//     console.log(session[i].name + '\n')
// }

// db.query('SELECT * from roles', (err, res, fild) => {
//     // if (err) throw error
//     // console.log(fild)
// })

// router.get('/', (req, res) => {
//     // res.send(conn) // send some data from db
//     res.send('400')
// })

// module.exports = router
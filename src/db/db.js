const Realm = require('realm')
const { UUID } = Realm.BSON

// схема обьекта "User"
const User = {
    name: 'User',
    primaryKey: "_id",
    properties: {
        _id: "uuid",
        name: "string",
        email: "string",
        password: "string",
        likes: "string?",
        role: "string"
    }
}


// подключается к реалму и создает файл бд в коре проекта
const realm = Realm.open({path: "realm/realm", schema: [User]})
    .catch(err => console.log(`db connection error`))

// const realm = async () => {
//     return await Realm.open({path: "realm/realm", schema: [User]})
// }

// realm
//     .then(realm => {
//         const obj = realm.objects("User")
//         .forEach(item => console.log(JSON.stringify(item.name)))
//         // console.log(JSON.stringify(obj.filtered('name == name')))
        
//     })

// async function readDB () {
//     const getedRealm = await realm()
//     try {
//         // const data = getedRealm.objects("User").length
//         const data = getedRealm.objects("User")
//         data.forEach(item => console.log(item.name))
//         return "test"
//     } catch (err) {
//         console.log(err)
//     }
// }

// readDB().then(console.log)

// const Users = realm.then(realm => realm.objects("User"))

module.exports = realm
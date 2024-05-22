const { faker } = require('@faker-js/faker');
const _ = require("lodash")
const path = require("path")

var usersWithKey = []

for (var i = 0; i < 10; i++) {
    var id = faker.database.mongodbObjectId()
    var firstName = faker.person.firstName()
    var lastName = faker.person.lastName()
    var userName = faker.person.fullName()
    var email = faker.internet.email()
    var job = faker.person.jobTitle()
    usersWithKey.push({
        id,
        firstName,
        lastName,
        userName,
        email,
        job,
    })
}
//console.log(usersWithKey)

var tenCompanies = []
var users_dup = [...usersWithKey]  //copie par 

for (var i = 0; i < 10; i++) {
    var random_user = _.random(0, users_dup.length-1)
    var Id = faker.database.mongodbObjectId()
    var name = faker.company.name()
    var userId = users_dup[random_user].id
    users_dup.splice(random_user, 1)
    var sumAccount = faker.finance.amount({ min: 1, max: 10000 })
    
    tenCompanies.push({
        Id,
        name,
        userId,
        sumAccount,
    })
}
// console.log(tenCompanies)


var createArticlesByCompagny = []
var articles_dup = [...tenCompanies]

tenCompanies.forEach((company)=>{                                                    //pour chaque company
    const nbArticle = _.random(3,150) //je choisi un nombre aléatoire compris entre 3 et 150
    for (var i = 0; i < nbArticle; i++) {   // tant que i est inférieur au nombre aléatoire trouvé
        var name = faker.commerce.product() //name article
        var price_sell = _.random(1,250)    //choix prix entre 1 et 250
        var price_buy = _.random(50,90)/100 * price_sell //choix prix 
        var pourcent_benefice = faker.finance.amount({ min: 1, max: 10000 })
        var company_id = company.Id //affectation de l'id de la company sur lequel on se trouve sur la boucle forEach
        var stock = _.random(1,150)
        
        createArticlesByCompagny.push({ //push dans tableau createArticlesByCompagny
            name : name,    //paramètre name : var name
            price_sell : price_sell,
            price_buy : price_buy,
            company_id : company_id,
            stock : stock
        })
    }
})
console.log(createArticlesByCompagny)


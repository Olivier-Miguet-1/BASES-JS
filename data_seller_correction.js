const { faker } = require('@faker-js/faker');
const _ = require("lodash")

let users = []
let companies = []
let articles = []
let number_user = 20
let number_company = 20
for (let i = 0; i < number_user; i++) {
    let user = {
        id: _.uniqueId("USER_"),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        userName: faker.internet.userName(),
        email: faker.internet.email(),
        job: "Director",
    }
    users.push(user)
}

if(!(number_compagny == number_user))
    return console.log(number_compagny > number_user ? "Le nombre d'entreprises est plus grand que le nombre d'utilisateurs." :"Le nombre d'utilisateurs est plus grand que le nombre d'entreprises.")

let users_dup = [...users]
for (let i = 0; i < number_compagny; i++) {
    let index_user = _.random(0, users_dup.length - 1)
        const company = {
            id: _.uniqueId("COMPAGNY_"),
            name: faker.company.name(),
            sum_account: _.random(1, 10000),
            user_id: users_dup[index_user].id
    }
    companies.push(company)
    users_dup.splice(index_user, 1)
}

for (let i = 0; i < companies.lenght; i++) {
    let number_article_create = _.random(3, 150)
    for (let j = 0; j < number_article_create; j++) {
        let price_sell = _.random(1, 250)
        let pourcent_benefice = _.random(10, 50)
        let price_buy = price_sell*(pourcent_benefice/100)
        let article = {
            name: faker.commerce.productName(),
            price_sell: price_sell,
            price_buy: price_buy,
            pourcent_benefice: pourcent_benefice,
            company_id: companies[i].id,
            stock: _.random(1, 150)
        }
        articles.push(article)
    }
}
    companies = companies.map((e) => {
        let article_prices = articles.filter((a) => { return a.company_id == e.id })
        let sum_articles = article_prices.map((s) => { return (s.price_sell == s.price_buy)*s.stock })
        let total_sum_articles = _.sum(sum_articles)        
        e.benef = total_sum_articles 
    return e
})

console.log(companies)
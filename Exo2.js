const { faker } = require('@faker-js/faker');
const _ = require("lodash")

let number_element = 25
let age_min = 18
let age_max = 65

var people = []
for (let i = 0; i < number_element; i++) {
    let sexPeople = faker.person.sexType();
    let firstName = faker.person.firstName(sexPeople);
    let lastName = faker.person.lastName();
    let age = _.random(age_min, age_max);
    people.push({
       firstName: firstName,
       lastName: lastName,
       gender: sexPeople,
       age: age 
    })
}

// console.log(object);

//   const { faker } = require('@faker-js/faker');
// const _ = require("lodash")
// 
// let number_element = 25
// let age_min = 18
// let age_max = 65
// 
// var people = []
// for (let i = 0; i < number_element; i++) {
    // let sexPeople = faker.person.sexType();
    // let firstName = faker.person.firstName(sexPeople);
    // let lastName = faker.person.lastName();
    // let age = _.random(age_min, age_max);
    // people.push({
        // firstName: firstName,
        // lastName: lastName,
        // gender: sexPeople,
        // age: age
    // })
// }

// for (let i = 0; i > people.length; i++) { //ajouter une nouvelle propriétét et la supprimer
    // people[i].gender_fr = "Homme"
    // if (people[i].gender === "female"){
        // people[i].gender_fr = "Femme"
    // } 
    // var text = `${people[i].firstName} ${people[i].lastName} _  ${people[i].gender_fr} -  ${people[i].age}ans`
// console.log(text)
// delete people[i].gender_fr
// }
// console.log(people)

function printPeople(tab) {
    for (let i = 0; i < tab.length; i++) {
        var obj_people = tab[i]
        var gender_fr = "Homme"
        if (tab[i].gender === "female") {
             gender_fr = "Femme"
    }
    var text = `${obj_people.firstName} ${obj_people.lastName} - ${gender_fr} - ${obj_people.age}ans`
    }
}
// function printPeople(tab) {
    // for (let i = 0; i < tab.length; i++) {
        // var obj_people = tab[i]
        // var gender_fr = "Homme"
        // if (tab[i].gender === "female") {
            // gender_fr = "Femme"
        // }
        // var text = `${obj_people.firstName} ${obj_people.lastName} - ${gender_fr} - ${obj_people.age}ans`
        // console.log(text)
    // }
// }
// printPeople(people)

let hommes_Plus_de_45ans = []
let hommes_Moins_de_45ans = []
let femmes_Plus_de_45ans = []
let femmes_Moins_de_45ans = []

for (let i = 0; i < people.length; i++) {
    if ((people[i].gender === "male") && (people[i].age > 45)) {
        hommes_Plus_de_45ans.push(people[i])
    }
    else if ((people[i].gender === "male") && (people[i].age <= 45)) {
        hommes_Moins_de_45ans.push(people[i])
    }
    else if ((people[i].gender === "female") && (people[i].age > 45)) {
        femmes_Plus_de_45ans.push(people[i])
    }
    else {
        femmes_Moins_de_45ans.push(people[i])
    }
}  
console.log("\nhommes de plus de 45 ans")
printPeople(hommes_Plus_de_45ans)
console.log("\nhommes de moins de 45 ans")
printPeople(hommes_Moins_de_45ans)
console.log("\nfemmes de plus de 45 ans")
printPeople(femmes_Plus_de_45ans)
console.log("\nfemmes de moins de 45 ans")
printPeople(femmes_Moins_de_45ans)

// console.log(people)
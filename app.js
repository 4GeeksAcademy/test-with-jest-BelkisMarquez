const sum = (a, b) => {
    return a + b
}

console.log(sum(7, 3))
module.exports = { sum };


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromDollarToYen = (dollar) => {
    let dolarToEuro = oneEuroIs["USD"] / dollar
    return Number(dolarToEuro * oneEuroIs["JPY"])
}
console.log(fromDollarToYen(25))

const fromEuroToDollar = (euro) => {
    return Number(oneEuroIs["USD"] * euro)
}
console.log(fromEuroToDollar(25))

const fromYenToPound = (yen) => {
    let yenToEuro = oneEuroIs["JPY"] / yen
    return Number(yenToEuro * oneEuroIs["GBP"])
}
console.log(fromYenToPound(50))

module.exports={sum,fromEuroToDollar,fromDollarToYen,fromYenToPound}
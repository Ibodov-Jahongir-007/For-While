let bsnss = [
    {
        name: "ali-airlines",
        budget: 3500000,
        tax: 18,
        expenses: [
            1200000,
            500000,
            100000
        ]
    },
    {
        name: "jav-oil",
        budget: 1500000,
        tax: 12,
        expenses: [
            10000,
            500000,
            25000
        ]
    },
    {
        name: "munir-auto",
        budget: 10000000,
        tax: 24,
        expenses: [
            6000000,
            20000,
            60000
        ]
    },
    {
        name: "jago-kalyoshi",
        budget: 500000,
        tax: 8,
        expenses: [
            10000,
            8000,
            12000
        ]
    },
    {
        name: "jahonbek-nosfrush",
        budget: 1000000,
        tax: 0,
        expenses: [
            200000,
            15000,
            3000
        ]
    }
]

// найти компанию которая больше всех платит налог
// найти компанию которая меньше всех платит налог
// покзать сколько гос-во зарабатывает со всех компаний 
// найти успешные и не успешные 20000
let unsuccessfull = []
let successfull = []

total_month_budget = 0
for(let item of bsnss) {
    let total_expenses = item.expenses.reduce((a,b) => a + b) / 12
    let total_month_budget = (item.budget / 12) - total_expenses 

    total_month_budget = total_month_budget - (item.tax * (total_month_budget) / 100) 


    //console.log(total_month_budget);
}


let mostExpensiveTax = bsnss.reduce((maxTax, tax) =>  tax.tax > maxTax.tax ? tax : maxTax)
console.log("Big Tax",mostExpensiveTax);

let cheapestTax = bsnss.reduce((minTax, tax) => tax.tax < minTax.tax ? tax : minTax)
console.log("Small tax",cheapestTax);



 let totalTaxForMnth = bsnss.reduce((a,b) => 
   a + (b.budget * b.tax / 100 ),0)
 
 console.log("Gosudarstvo",totalTaxForMnth);

let ex_4 = bsnss.filter(el => {
    if(bsnss.budget / 12 >= 20000) {
        unsuccessfull.push(el)
    } else {
        successfull.push(el)
    }
})

console.log("succesfull",successfull);
console.log("unsuccesfull",unsuccessfull);







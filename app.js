function generateEmail(username, domain) {
  return `${username}@${domain}`
}

console.log('sara', generateEmail("sara", "company.com")) // sara@company.com
console.log('ali', generateEmail("ali", "example.com")) // ali@example.com
console.log('fatima', generateEmail("fatima", "school.edu")) // fatima@school.edu



function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}!`;
}
console.log(greetUser('Sara','morning'))
console.log(greetUser('Ali', 'afternoon'))
console.log(greetUser('Fatima', 'evening'))


// // Test your function
console.log('Exercise 2 Result:', greetUser("Sara", "morning")) // Good morning, Sara!
console.log('Exercise 2 Result:', greetUser("Ali", "afternoon")) // Good afternoon, Ali!
console.log('Exercise 2 Result:', greetUser("Fatima", "evening")) // Good evening, Fatima!




function calculateVAT(price, vatPercentage) {
    return price * (vatPercentage / 100);
}



// Test your function
// calculateVAT()

console.log('Exercise 3 Result:', calculateVAT(50, 10)) // 5
console.log('Exercise 3 Result:', calculateVAT(100, 10)) // 10
console.log('Exercise 3 Result:', calculateVAT(200, 5)) // 10


function checkStock (quantity) {
    if (quantity > 0) {
        return "In stock"
    }
    else {
        return "Out os stock"
    }
}



// // // Test your function
console.log('Exercise 4 Result:', checkStock(10)) // In stock
console.log('Exercise 4 Result:', checkStock(0))  // Out of stock
console.log('Exercise 4 Result:', checkStock(1))  // In stock


function maxOfTwoNumbers(numA, numB) {
    if (numA > numB) {
        return numA
    }
    else if (numA === numB) {
        return numA||numB
}
    else {
        return numB
}
}

// // Test your function
console.log('Exercise 5 Result:', maxOfTwoNumbers(3, 9)) // 9
console.log('Exercise 5 Result:', maxOfTwoNumbers(15, 4)) // 15
console.log('Exercise 5 Result:', maxOfTwoNumbers(7, 7)) // 7




function isCharAVowel(char) {
    if (
        char === "a" ||
        char === "i" ||
        char === "u" ||
        char === "e" ||
        char === "o"
    ) {
        return true
    } else {
        return false
    }
}


// // Test your function
console.log('Exercise 6 Result:', isCharAVowel("a")) // true
console.log('Exercise 6 Result:', isCharAVowel("e")) // true
console.log('Exercise 6 Result:', isCharAVowel("b")) // false
console.log('Exercise 6 Result:', isCharAVowel("y")) // false




function maxOfThree(numA, numB, numC) {
    if (numA >= numB && numA >= numC) {
        return numA;
    } else if (numB >= numA && numB >= numC) {
        return numB;
    } else {
        return numC;
    }
}


// // Test your function
console.log('Exercise 7 Result:', maxOfThree(5, 10, 8)) // 10
console.log('Exercise 7 Result:', maxOfThree(20, 5, 10)) // 20
console.log('Exercise 7 Result:', maxOfThree(3, 7, 15)) // 15
console.log('Exercise 7 Result:', maxOfThree(8, 8, 4)) // 8



function convertTemperature(temperture, scale) {
    if(scale === "c") {
        return (temperture * 9 / 5) + 32
    } else {
        return (temperture - 32) * 5 / 9
    }
}


// Test your function
console.log('Exercise 8 Result:', convertTemperature(0, "C")) // 32
console.log('Exercise 8 Result:', convertTemperature(32, "C")) // 89.6
console.log('Exercise 8 Result:', convertTemperature(32, "F")) // 0
console.log('Exercise 8 Result:', convertTemperature(212, "F")) // 100






function basicCalculator(numA, numB, operation) {
    if(operation === "add") {
        return numA + numB
    } else if (operation === "subtract") {
        return numA - numB
    } else if (operation === "multiply") {
        return numA * numB
    } else if (operation) {
       return numA / numB
    }
}


// Test your function
console.log('Exercise 9 Result:', basicCalculator(10, 5, "add")) // 15
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract")) // 5
console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply")) // 50
console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide")) // 2

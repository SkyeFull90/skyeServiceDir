function humanToDogYears(humanAge) {
    let dogYears;
    if (humanAge <= 2) {
        dogYears = humanAge * 10.5;
    } else {
        dogYears = 21 + (humanAge - 2) * 4;
    }
    return dogYears;
}

// Test the function
console.log(humanToDogYears(8));  // Output: 45
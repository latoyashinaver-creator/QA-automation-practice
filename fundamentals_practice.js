const person = {
    name: "Latoya S.",
    age: 42,
    learningAutomation: "true",
    favorite_tools: ["Selenium", "Postman", "JMeter", "VS Code", "Playwright"],
    password: "false"
}

let expected_age = 18;
let actual_age = 42;
console.log(expected_age === actual_age); // false
console.log(actual_age > expected_age); // true
console.log(42 <= 18); // false


if (expected_age === actual_age) {
console.log("Test Passed");
} else { console.log("Test Failed");
}
console.log("Test Result: " + (actual_age === actual_age ? "Passed" : "Failed"));
if (person.learningAutomation === "true") {
    console.log("I am learning automation at " +  person.age)
} else {
    console.log("I am not learning automation at " + person.age);
}


if (expected_age === actual_age ? "Passed" : "Failed" ) {
console.log("Test Failed");
} else {
console.log("Test Passed");
}
console.log("Test Result: " + (expected_age === actual_age ? "Passed" : "Failed"));
if (person.learningAutomation === "false") {
    console.log("I am learning automation at " +  person.age)
} else {
    console.log(`I am not learning automation at ${person.age}`);
}
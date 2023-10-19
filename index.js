const userInputString = prompt("Please enter your yogurt flavors separated by commas.", "Strawberry, Vanilla, Chocalate");

const stringArray = userInputString.split(",");

const froyoFlavors = {};

for (let i = 0; i < stringArray.length; i++) {
    if (froyoFlavors[stringArray[i]]) {
        froyoFlavors[stringArray[i]]++;
    } else {
        froyoFlavors[stringArray[i]] = 1;
    }
}

console.table(froyoFlavors);

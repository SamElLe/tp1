let stringArray = "une chaine avec des lettres dans un certain ordre pour donner du sens";
let myArray = [...stringArray]
console.log(myArray.sort());

let phrase = "une chaine avec des lettres dans un certain ordre pour donner du sens";
let tableau = Array.from(phrase.replace(/ /g, ""))
console.log(tableau.sort().toString());
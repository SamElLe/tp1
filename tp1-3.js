

let string = 'une phrase sans majuscule';
let array = string.split(" ");



for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);

}

let str2 = array.join(" ");
console.log(str2);

let phrase = 'une phrase sans majuscule';
let tab = phrase.split(' ');
let resultat= '';

for (const chaqueMot of tab) {
    let premiereLettre = chaqueMot.substring(0,1).toUpperCase();
    let lesAutresLettres = chaqueMot.substring(1).toLowerCase()
    let leMotReconstruit = premiereLettre + lesAutresLettres + " ";

    resultat += leMotReconstruit;
    //resultat = resultat + leMotReconstruit;

}
console.log(resultat);
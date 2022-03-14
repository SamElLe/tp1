

function getRandom() {

    return Math.random();
}
function getRound(){
    return Math.round(getRandom() * 100)
}



let tab = [];

while (tab.length < 100) {
    let i = getRound();
        if (tab.indexOf(i) === -1) {
            tab.push(i)
        }

    }console.log(tab);




let tabDeBingo = new Array(100);
tabDeBingo.fill(false);

let cpteur = 0;
let nbreEssai = 0;
let hasard;
do {
    //Je tire un nombre au sort
    hasard = Math.round(Math.random()*100);

    //Je verifie s'il est deja dans le tableau
    if (tabDeBingo[hasard] === false) {
        tabDeBingo [hasard] = true;
        cpteur++;
    }
    nbreEssai++;
} while (cpteur < 100)

console.log("Nombre d'essai : " + nbreEssai)
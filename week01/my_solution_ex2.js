"use strict";

const names = "Luigi De Russis, Luca   Mannella, Fulvio  Corno, Juan Pablo Saenz Moreno, Enrico Masala, Antonio Servetti, Eros Fani";

// const nameArray = names.split(', ');
const nameArray = names.split(",");

// remove spaces
for(let i=0; i<nameArray.length; i++) {
    nameArray[i] = nameArray[i].trim();
}

// note that the following wouldn't work since value ia a reference to an object but
// it doesn't modify the content inside the array

// for(let val of nameArray) {
//     val = val.trim();
// }

console.log(`Names: ${nameArray}`)

console.log(nameArray)

const acronyms = []

for(const name of nameArray) {
    const words = name.split(' ');
    // console.log(words)

    let initials = [];
    for(const wrd of words) {
        if(wrd) {
            initials = initials + wrd[0]
        }
    }
    acronyms.push(initials)
}

// console.log(`Acronyms: ${acronyms}`)

for(let i=0; i<acronyms.length; i++) {
    console.log(`${acronyms[i]} - ${nameArray[i]}`);
}
"use strict";

const scores = [3,2,9,-2,-3,10,3,4,5]
/*
    Allow to modify the content by using scores[3]=7; but not by modifying the scores
    variable directly
*/

// scores[1] = 7;
// scores.push(13);
// both are permitted

// this is not permitted `scores = [2,3]`

console.log("Scores: " + scores);

// following doesn't work
const better0 = [...scores]; // create a copy

console.log("Copy: " + better0);

for(let i=0; i<better0.length; i++) {
    if(better0[i]<0) {
        better0.splice(i,1);
    }
}

console.log("Result wrong:\n " + better0)

// better solution
const better = [];
for(let value of scores) {
    if(value>=0) {
        better.push(value);
    }
}

const NN = scores.length - better.length;

console.log("Result correct:\n " + better + "\n NN = " + NN )

let minVal = Math.min(...better);
let minPos = better.indexOf(minVal);
better.splice(minPos,1);

minVal = Math.min(...better);
minPos = better.indexOf(minVal);
better.splice(minPos,1);

console.log("\n " + better + " (removed the 2 minimums)\n ")

let sum=0;
for(const value of better) {
    sum += value;
}

const average = Math.round(sum/better.length)

for(let i=0; i<NN+2; i++) {
    better.push(average);
}

console.log(better)

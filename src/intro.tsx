import * as React from "react";

let count: number = 5;

// count = "lol";

// no types here...
let name = "louise";

const users = ["bob", "lisa", "gene" ];

const lengths = users.map(s => s.length);


// functions have types...
const capitalize = (s: string) => (
    s.charAt(0).toUpperCase() + s.substr(1)
);



const repeat: (n: number) => (s: string) => string = n => s => s.repeat(n)
// users.map(repeat)
const myNewfunc = repeat(8);

users.map(myNewfunc);


const prepend = (s1: string) => (s2: string) => s1 + s2;


const prependers = users.map(prepend);


const myTuple: [number, string] = [2, "lol"];




const myNumbers = [1, 2, 3, 4, 5, 6];

function split<A extends (B|C), B, C>(a: A[], f: (a:A) => Boolean): [A[], A[]] {
    return a.reduce(([prevL, prevR], curr) => {
        if(f(curr)){
            return [prevL.concat(curr), prevR] as [A[], A[]];
        } else {
            return [prevL, prevR.concat(curr)] as [A[], A[]];
        }
    }, [[],[]] as [A[], A[]]);
}

const [evens, odds] = split(myNumbers, n => n % 2 === 0);




const myHeterogenousArray = split(["lololol", "lol", "lololol"], s => s.length < 4);

interface SystemError {
  desc: string,
  timestamp: number
}







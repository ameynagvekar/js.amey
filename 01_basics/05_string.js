const name = "Amey"
const repoCount = 50

console.log(name + repoCount + "value");

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gamename = new String('Amey_Pandu_tony_stark');

console.log(gamename[0]);
console.log(gamename.__proto__);


console.log(gamename.length);
console.log(gamename.toLocaleUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('A'));

const newString = gamename.substring(0,4);
console.log(newString)

const anotherString = gamename.slice(-4, 5 );

const newStringone = "   amey  taklu"
console.log(newStringone)
console.log(newStringone.trim());

const url = "https:amey.com/amey%20nagvekar"

url.replace('%20', '_');
console.log(url.replace('%20', '_'));


console.log(url.includes('chaman'));

console.log(gamename.split('_'));


//study all string methods using mdn


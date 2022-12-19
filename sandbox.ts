var char = 'rambo';
console.log(char);

var inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
 console.log(input);
 
})

var circ = (diameter: number)=> {
 return diameter * Math.PI;
}

console.log(circ(2));

let names: string[] = [];
names.push('meme');

console.log(names);

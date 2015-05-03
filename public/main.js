$(document).ready(init);

function init(){
  $('#sq-odds').click(squareOdds);
  $('#dest').click(dest);
  $('#power').click(power);
  $('#generator').click(generator);
}

// generators
function generator(){
  var [x, y] = $('#numbers')
    .val()
    .split(',')
    .map(n=> n * 1);

  // var output = [for(j of gen(x)) j*j];
  // array comprehension with two arrays
  var output = [for(j of gen(x)) for(k of gen(y)) {x:j, y:k}]
    .map(o=> `<div>x:${o.x} y:${o.y}</div>`);

  console.log(output);

  for(j of gen(x)){
    console.log(j);
  }
}

// generators (iterator)
// creates an object to call next() on
function* gen(x){
  for (var i = 0; i < x; i++){
    // generator will be done when finished with all yiel statements
    yield i;
  }
}

function power(){
  var numbers = $('#numbers')
    .val()
    .split(',')
    // arrow functions
    .map(n=> n* 1);

  // spread operator
  var output = realPower(...numbers);
  console.log(output);
}

// default parameters
function realPower(base, exponent=2){
  return Math.pow(base, exponent)
}

function destructuring(){
  var numbers = $('#numbers')
    .val()
    .split(',')
    .map(n=> n * 1);

  // array destructuring & spread operator
  var [a, v] = areaVol(...numbers);
  console.log(a);
  console.log(v);
}

function areaVol(l, w, h){
  let area = l * w;
  let vol = area * h;
  return [area, vol]
}

function squareOdds(){
  var output = $('#numbers')
    .val().split(',')
    .map(n=>n * 1)
    .filter(n=>n % 2 === 1)
    .map(n=> n * n)
    // Template strings
    .map(n=> `<div>${n}</div>`);

  $('#odds').append(output);
  console.log(output);
}

var foo = 'baz';
let foo = 'bar';
console.log(foo); // bar

let foo = 'bar';
var foo = 'baz';
console.log(foo); // baz

// will behave as var inside the for loop
{ let i;
    for (i=1; i<=5; i++) {
        setTimeout(function(){
            console.log("i:",i); // will always be 6
        },i*1000);
    }
}

class AnimalES6 {
  constructor(name) {
    this.name = name;
    this._age = 0;
  }

  /*
  get age() {
    return this._age;
  }
  */

  set age(value) {
    if (value < 0) {
        console.log("We do not support undead animals");
    }

    this._age = value;
  }

  doSomething() {
    console.log("I'm a " + this.name);
  }
}

var lionES6 = new AnimalES6("Lion");
lionES6.doSomething();
lionES6.age = 5;
console.log('ES6 Lion: ', lionES6.age); // will be undefined without defining age getter

function AnimalES5() {
}

var lionES5 = new AnimalES5();
lionES5.age = 5;
console.log('ES5 Lion: ', lionES5.age); // 5


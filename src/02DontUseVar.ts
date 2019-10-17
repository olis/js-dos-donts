var foo = "Foo";
let bar = "Bar";

console.log(window.foo);
console.log(window.bar); // is never garbage collected

var foo1 = "foo1";
var foo1 = "foo2";

let bar1 = "bar1";
let bar1 = "bar2";
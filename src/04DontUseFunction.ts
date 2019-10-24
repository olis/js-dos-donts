const mouse = {
  name: "Jerry",
  bark: function() {
    console.log(`Piep, ${this.name}!`);
  }
};
mouse.bark();

// const cat2 = {
//   name: "Tom",
//   bark: function() {
//     setTimeout(function() {
//       console.log(`Meow, ${this.name}!`);
//     }, 1000);
//   }
// };
// cat2.bark();

// const cat3 = {
//   name: "Sylvester",
//   bark: function() {
//     setTimeout(() => {
//       console.log(`Meow, ${this.name}!`);
//     }, 1000);
//   }
// };
// cat3.bark();

// add(3, 4);
// sub(7, 4);

// function add(left: number, right: number) {
//   console.log(left + right);
// }

// const sub = (left: number, right: number) => {
//   console.log(left - right);
// };

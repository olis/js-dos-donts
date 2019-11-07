let dog = {
  name: "Bello",
  bark: function() {
    console.log(`Wuff, ${this.name}!`);
  }
};
let cat = {
  name: "Miezi",
  bark: function() {
    console.log(`Miau, ${this.name}!`);
  }
};
// cat.bark();
// cat.name = "Tiger";
// cat.bark();
// dog = cat;
// dog.bark();

// const bird = {
//   name: "Hansi",
//   bark: function() {
//     console.log(`Piep, ${this.name}!`);
//   }
// };

// bird.bark();
// bird.name = "Toni";
// bird.bark();
// bird = cat;
// bird.bark();

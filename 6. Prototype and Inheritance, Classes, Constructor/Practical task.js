class Animal {
    constructor (name) {
      this.name = name;
    }
    move() {
        console.log (`${this.name} moves!`);
      }
  }

class Cat extends Animal {}

const cat = new Cat ('Felix the Cat');

cat.move ();
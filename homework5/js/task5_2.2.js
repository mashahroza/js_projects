class User {
    constructor ({name, age, followers} = {}) {
        this.name = name;
        this.age = 0;
        this.followers = 0;
    }

    getInfo() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
    }
}

// User.prototype.getInfo = function () {
//     console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
// }

const mango = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
  });
  
  mango.getInfo();
  
  const poly = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
  });
  
  poly.getInfo();
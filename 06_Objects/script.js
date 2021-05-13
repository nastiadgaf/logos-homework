function createNameObj(name, surname) {
    return {
      name: name,
      surname: surname,
    };
  }
const smithObj = createNameObj('John', 'Smith');

console.log(smithObj.name); // John
console.log(smithObj.surname); // Smith
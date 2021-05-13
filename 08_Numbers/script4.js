function randomInteger(min, max) {
    let number =  min + Math.random() * (max - min);
    return Math.round(number);
  }
  
  console.log(randomInteger(1, 5));
  console.log(randomInteger(1, 5));
  console.log(randomInteger(1, 5));
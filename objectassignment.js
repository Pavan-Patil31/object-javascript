// first eg 

student = {
    fname:'Pavan',
    age:21,
    grade:'B',
}
 student.subject = 'math'

 student.grade ="A"

 delete student.grade
 console.log(student);


//  second eg

 book = {
    title:'Mirasdari',
    author:'D.M.MIrasdar',
    details:{
        pages:35,
        genre:"comedy",
    }

} 
console.log("pages:",book.details.pages);
console.log("genre:",book.details.genre);

// 3 question

product = {
    Name:'cetaphil',
    price:200,
    stock:45,
}
for ( property in product) {
    console.log(`${property}: ${product[property]}`);
  }

//   5 question as compare objects
 
person1 = {
    Name:'Pavan',
    age:21,
}
person2 = {
    Name:'Atharv',
    age:22,
}
console.log(person1.Name === person2.Name);
(function() {console.log("hello")})()

// 4th eg

 calculator = {
    
    add: function (a, b) {
      return a + b;
    },
  
    
    subtract: function (a, b) {
      return a - b;
    },
  
    
    multiply: function (a, b) {
      return a * b;
    },
  
    
    divide: function (a, b) {
      if (b === 0) {
        return "Error: Division by zero is not allowed!";
      }
      return a / b;
    }
  };
  
  
  console.log("Addition:", calculator.add(5, 3));       
  console.log("Subtraction:", calculator.subtract(5, 3)); // Output: 2
//   console.log("Multiplication:", calculator.multiply(5, 3)); // Output: 15
//   console.log("Division:", calculator.divide(5, 3));       // Output: 1.666...
//   console.log("Division by zero:", calculator.divide(5, 0)); // Output: Error: Division by zero is not allowed!
  


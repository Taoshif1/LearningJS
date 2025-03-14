# LearningJS
For learning &amp; practice purpose

# Javascript Topics

## Javascript - Basics

- Introduction to JS
    - What is JS
    - Ways to add JS
    - Output : alert(), confirm(), console()
- Tokens
    - Keywords
    - Variables : var bvs let vs const
    - Data types (typeof) => number, string, boolean, null, undefined, object, symbol
    - Truthy vs falsy values
- Operators : Arithmetic, Assignment, Comparison, Logical, Unary, Binary

## Javascript

- Control statement
    - Conditional control statement : if, else, else if, switch
    - Loop control statement
        - for, while, do while
        - while vs do while
        - break, continue
- Array, String, Object
    - for of, for in

## Javascript

- Function vs method
  ```
  Function(){}       Function(){method: value;}
  ```
- Function (Traditional (can use this. keyword) vs Arrow)
- Method - Number, Array, Math, Date, String methods

## Javascript - Intermediate

- ES6, ES7
    - Template literals - console.log(`Hello, ${fullName}!`);
- var vs let vs const
- Arrow function 
    - const add = (num1, num2) => num1 + num2; // cannot use this. keyword in arrow functions
- Module - export, import
- Spread Operator, Rest parameters (...)
    //spread operatos ... in Array
    - const oldArray = [1, 2, 3, 4, 5];
      const newArray = [...oldArray, 6, 7, 8, 9, 10];
      console.log(newArray); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    - // spread operators ... in Object
        const oldObject = {name: 'Taoshif', age: 21};
        const newObject = {...oldObject, city: 'Dhaka', country: 'Bangladesh'};
        console.log(newObject);

- Destructure
- Default value (Curly braces must) - export default users;  (Curly barces not needed + can change the name too)

- ES6
    - Higher order functions : foreach(), map(), filter(), foreach(), reduce(), some(), every(), sort(); 
    - Callback functions: synchornous vs asynchornous callback
    - Synchronous vs Asynchronous
    - Asynchronous programming : Promise, async, await, then, catch, callback
    - Event Loop
- Error handling
- JSON
- Localstorage
- API calling: GET, POST, PUT, DELETE
- fetch api
- DOM (Document Object Model) and Event Handler

- OOP

- Project : To Do app, Ecommerce front-page, simple bank app

- Testing

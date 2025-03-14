// New concepts for me:

// 1. Concept: Arrow function
//const add = (num1, num2) => num1 + num2;
//const minus = (num1, num2) => num1 - num2;

//const num1 = Number(prompt('Enter the first number:'));
//const num2 = Number(prompt('Enter the second number:'));

//console.log(`Sum: ${add(num1, num2)}`);
//console.log(`Difference: ${minus(num1, num2)}`);


// 2. Concept: Module
//import {add, minus} from './math.js';


// 3.1 Concept: spread operators ... in Array
//const oldArray = [1, 2, 3, 4, 5];
//const newArray = [...oldArray, 6, 7, 8, 9, 10];  
//console.log(newArray); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 3.2 Concept: spread operators ... in Object
//const oldObject = {name: 'Taoshif', age: 21};
//const newObject = {...oldObject, city: 'Dhaka', country: 'Bangladesh'};
//console.log(newObject);

// 3.3 Concept: Rest parameters
// const sum = (msg, ...numbers) => {
  // Rest parameters must be used at the very last position, otherwise it won't work.
//     console.log(msg);  //Hello
//     let sum = 0;
//     for(const number of numbers) {
//         sum += number;// 
//     }
//     return sum;
// };
// console.log(sum("Hello", 1));  //1
// console.log(sum(1, 2));  // 3
// console.log(sum("Hi", 1, 2, 3));  //Hi, 6
// console.log(sum(1, 2, 3, 4, 5));  // 15


// 4 Concept: Destructuring
// 4.1 Destructuring in Object
// const person = {
//     fullName: 'Taoshif', 
//     age: 21,
//     languages: {
//         native: 'Bangla',
//         fluent: 'English',
//     }
// };
// const { fullName: f_name, age, languages} = person;  // Destructuring
// console.log(f_name);  // Destructure + Rename 
// console.log(age); // 21
// console.log(languages); // {native: "Bangla", fluent: "English"}

// console.log(person.languages.native); // Usually  we use like this

// 4.2 Destructuring in Array
// const colors = ['red', 'green', 'blue'];
// const [first, second, third] = colors;
// console.log(first); // red
// console.log(second); // green    
// console.log(third); // blue

// 5. Concept: Default value
// const greet = (msg="Good day to you!") => console.log(msg);
// greet("Good Morning");    // Good Morning
// greet("Good Afternoon"); // Good Afternoon
// greet("Good Night");    // Good Night 
// greet();               // Good day to you!

// 6. Concept: Higher order function (receives callback functions)  => calc
// 7. Concept: Callback function  => operation
// const calc = (num1, num2, operation) => 
//      operation(num1, num2);   
//
// const add = (num1, num2) => num1 + num2;
// const minus = (num1, num2) => num1 - num2;      
// const multiply = (num1, num2) => num1 * num2;
// const divide = (num1, num2) => num1 / num2;
// 
// console.log(calc(10, 5, add)); // 15
// console.log(calc(10, 5, minus)); // 5
// console.log(calc(10, 5, multiply)); // 50   
// console.log(calc(10, 5, divide)); // 2


// 2 types of callback function => synchronous vs asyn callback
// Higher order built-in functions: forEach => 
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = [];
// numbers.forEach((number) => {// 
//       console.log(`Hello`);  // If there is no element in the array, it won't run the callback function, not even once.
//      squaredNumbers.push(number * number)});
// console.log(squaredNumbers); // (5) [1, 4, 9, 16, 25]

// Higher order built-in functions: map =>
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map((number) => number * number );  // !map returns a new array, while forEach doesn't return a new array.
// console.log(squaredNumbers); // (5) [1, 4, 9, 16, 25]

// const products = [
//     {id: 1, name: 'Laptop', price: 1000},
//     {id: 2, name: 'Mobile', price: 500},
//     {id: 3, name: 'Tablet', price: 300},
// ];
// products.map((product, index) => {
//   console.log(`Product Card : ${index + 1}`);
//   console.log(`ID: ${product.id}`);
//   console.log(`Product Name: ${product.name}`);
//   console.log(`Product Price: ${product.price}`);
//   console.log(`-----------------`);
// });

// Higher order built-in functions: filter
//   const products = [
//     {id: 1, name: 'Laptop', price: 1000},
//     {id: 2, name: 'Mobile', price: 600},
//     {id: 3, name: 'Tablet', price: 300},
// ];

// return items => price > 500
// const filteredproducts = products.filter((product) => product.price > 500 ); 
//Filter filters based on the condition. If the condition is true, it will return the item, otherwise it won't return the item.
// console.log(filteredproducts); 

// Filter + map
//  return items name => price >= 500 && price <= 1000
//   const products = [// 
//       {id: 1, name: 'Laptop', price: 1000},
//       {id: 2, name: 'Mobile', price: 500},
//       {id: 3, name: 'Tablet', price: 300},
//   ];
// const filteredNames = products.filter((product) => product.price >= 500
//   && product.price <= 1000).map((item) => item.name); 
// console.log(filteredNames); 

// ! Search a product by using filter// 
// const searchedproducts = (searchValue) => {
//   return products.filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase()));
// };
// console.log(searchedproducts(`laptop`)); // [ { id: 1, name: 'Laptop', price: 1000 } ]

// !Higher order built-in functions: reduce

// const cartProducts = [ 
//     {id: 1, name: 'Laptop', price: 1000},
//     {id: 2, name: 'Mobile', price: 500},
//     {id: 3, name: 'Tablet', price: 300},
// ];

    // Calculate total price of the cart products using for loop
//    let total = 0;
//    for(let index = 0; index < cartProducts.length; index++) {
//        total += cartProducts[index].price;
//      }
//      console.log(`Total Price: ${total}`); 

  // Calculate  total price of the cart products using foreach loop
  //let total = 0;
  //cartProducts.forEach((product) => (total += product.price));
  //console.log(`Total Price: ${total}`);


   // Calculate  total price of the cart products using reduce
  //const totalPrice = cartProducts.reduce((accumulator, currentItem) => accumulator + currentItem//.price, 0);
  //console.log(`Total Price: ${totalPrice}`);
  // 0 is the initial value of the accumulator. If we don't provide the initial value, it will take the first item of the array as the initial value of the accumulator.
  // reduce + map
  // const totalPrice = cartProducts.map((cartItem) => cartItem.price).reduce((accumulator, currentPrice) => accumulator + currentPrice, 0);
  // console.log(`Total Price: ${totalPrice}`);


// Higher order built-in functions: some (boolean value) => returns true if at least one item satisfies the condition
// Best practice: variable name should start with has
// atleast one item price > 400
// const hasPrice = cartProducts.some((product) => product.price > 600);
// console.log(`atleast one item price > 600 ${hasPrice}`); // true

// Higher order built-in functions: every (boolean value) => returns true if every item satisfies the condition
// const allPrice = cartProducts.every((product) => product.price > 200);
// console.log(`atleast one item price > 200 ${allPrice}`); // true


// Higher order built-in function: sort
// Usecase: sorting products based on name, createAt, price
// const products = [ 
//   {id: 1, name: 'Laptop', price: 1000, createdAt: new Date(`2023-01-01`)},
//   {id: 2, name: 'Mobile', price: 500, createdAt: new Date(`2024-01-01`)},
//   {id: 3, name: 'Tablet', price: 300, createdAt: new Date(`2023-01-25`)},
// ];

// Sort by product name
 // const sortByName = products.sort((a, b) => {
    // return a.name.localeCompare(b.name);  // Ascending order
    //return b.name.localeCompare(a.name); // Descending order
//});
// console.log(`Sorted by Names`);
//console.log(sortByName); 

// Sort by product price
// const sortByPrice = products.sort((a, b) => {
//   return a.price - b.price;  // Ascending order
//   return b.price - a.price;  // Descending order
// }) 
// console.log(`Sorted by Price`);``);
// console.log(sortByPrice);// 


// Sort by product date
//   const sortByDate = products.sort((a, b) => {// 
//      return a.createdAt - b.cr// eatedAt;  // Ascending order
   // return b.name.localeCompare(a.name); // Descending order
// });
// console.log(`Sorted by Date`);
// console.log(sortByDate)

// Create menu for sorting using switch case
// Function to display the menu
// const displayMenu = () => {
//   const menu = `
//   1. Sort by Name (A-Z)
//   2. Sort by Name (Z-A)
//   3. Sort by Price (Low to High)
//   4. Sort by Price (High to Low)
//   5. Sort by Date (Old to New)
//   6. Sort by Date (New to Old)
//   `
//   return menu;
// }

// Print products
// const printProducts = (products) => {
//  console.log(JSON.stringify(products, null, 2));
// }

// Copying the main product array tp another array
// let productsArray = [...products];

// Sorting functions
// const sortByNameAZ = (productsArray) => {
//   return productsArray.sort((a, b) => a.name.localeCompare(b.name));
// }
// const sortByNameZA = (productsArray) => {
//   return productsArray.sort((a, b) => b.name.localeCompare(a.name));
// }
// const sortByPriceLowToHigh = (productsArray) => {
//   return productsArray.sort((a, b) => a.price - b.price);
// }
// const sortByPriceHighToLow = (productsArray) => {
//   return productsArray.sort((a, b) => b.price - a.price);
// }
// const sortByDateOldToNew = (productsArray) => {
//   return productsArray.sort((a, b) => a.createdAt - b.createdAt);
// }
// const sortByDateNewToOld = (productsArray) => {
//   return productsArray.sort((a, b) => b.createdAt - a.createdAt);
// }

// console.log(displayMenu());
// const choice = prompt("Enter your choice between 1 - 6: ");

// switch(choice) {    
//   case `1`:
//     console.log(`Sorted by Name (A-Z)`);
//     sortByNameAZ(productsArray);
//     printProducts(productsArray);
//       break;
//   case `2`:
//     console.log(`Sorted by Name (Z-A)`);
//     sortByNameZA(productsArray);
//     printProducts(productsArray);
//       break;
//   case `3`:
//     console.log(`Sorted by Price (Low - High)`);
//     sortByPriceLowToHigh(productsArray);
//     printProducts(productsArray);
//       break;
//   case `4`:
//     console.log(`Sorted by Price (High - Low)`);
//     sortByPriceHighToLow(productsArray);
//     printProducts(productsArray);
//       break;
//   case `5`:
//     console.log(`Sorted by Date (Old - New)`);
//     sortByDateOldToNew(productsArray);
//     printProducts(productsArray);
//       break;  
//   case `6`:
//     console.log(`Sorted by Date (New - Old)`);
//     sortByDateNewToOld(productsArray);
//     printProducts(productsArray);
//       break;
//   default:
//     console.log(`Invalid Choice`);
// }


// Errors
// Exception Handling 
// i already know these stuffs 


 // JSON (JavaScript Object Notation) 
// JSON.stringify() , JSON.parse()

// Localstorage
// localstorage.setItem(key, value), localstorage.getItem(key), 
// localStorage.RemoveItem(key), localStorage.clear()

// const loginInfo = {
//   username : 'gazitaoshif',
//   password : '123456',
//   loginStatus : true 
// };

// console.log(loginInfo);
// localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
// const fromStorage = JSON.parse(localStorage.getItem('loginInfo'));
// console.log(fromStorage);

// try{
//   localStorage.removeItem('loginInfo');
// } catch(error){
//   console.log(error);
// }
// console.log('Hiiiiiii');

// Synchronous vs Asynchronous
// JS is a single threaded, blocking, Synchronous programming language

// console.log('Task 1 Done');
// console.log('Task 2 Done');
// setTimeout(() =>  {
//   console.log('Task 3 Done');
// }, 2000);
// console.log('Task 4 Done');
// console.log('Task 5 Done');


// Promise Asynchornous - pending, resolve, reject
// API Call
// JS global object => window
// promise => .then() => .catch()

// GET request
// fetch('https://fakestoreapi.com/products/1')
//             .then((res)=> res.json())
//             .then((json)=> console.log(json))
//             .catch((err)=> console.log(err));
// Must Check for more details

// POST request
// const product = { title: 'New Product', price: 29.99 };
// fetch('https://fakestoreapi.com/products', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(product)
// })
//   .then(response => response.json())
//   .then(data => console.log(data));
//   .catch((error)=> console.log(error));


// Method: PUT request, DELETE request

// async-await
// const getProducts = async () => {
//   try{
//     const res = await fetch('https://fakestoreapi.com/products');
//     if(!res.ok){
//       throw new Error('Could not fetch data')
//     }
//     const data = await res.json();   //Confirm the response before converting to JSON
//     console.log(data);
//   }catch(error){
//     console.log(error);
//   }
// };
// getProducts();// 


// DOM (Document Object Model) => Represents HTML document as a tree
// create HTML element, delete, update, read/select

// DOM => read/select element and modify
// const titleElement = document.getElementByClassName('title-class');
// console.log(titleElement);
// console.log(titleElement.id);
// console.log(titleElement.class);
// console.log(titleElement.textContent);
// titleElement.textContent = 'Setting value from JS';

// const button = document.getElementsByClassName('btn');  // returns collection of 3 buttons
// const button1 = document.getElementsByClassName('btn')[0];  // returns 0 index button
// button1.textContent = 'Click here';
// console.log(button1);

// const button1 = document.getElementsByTagName('button')[0];
// button1.textContent = "click here";
// console.log(button1);

// const button1 = document.querySelector('#title');  // for title -> #title
// const button1 = document.querySelector('.btn');  // for class -> .btn
// const button1 = document.querySelector('button');  // for tag
// button1.textContent = "Click 1";
// console.log(button1);

// const buttons = document.querySelectorAll('.btn');
// console.log(buttons);


//const titleElement = document.querySelector('#title'); 
//titleElement.style.color = 'red';
//titleElement.style.backgroundColor = 'green';
//titleElement.style.padding = '1rem';

// const titleElement = document.querySelector('.btn'); 
//titleElement.textContent = 'Welcome';
//titleElement.classList.add("btn");
// titleElement.classList.remove("btn");

// Create and remove HTML Element
//const buttonsContainer = document.getElementById('buttons-container');
//const button4 = document.createElement("button");
//button4.textContent = 'button4';
//buttonsContainer.appendChild(button4);
//buttonsContainer.removeChild(button4);

// Find button1 to remove
// const button1 = document.querySelectorAll('button')[0];
// button1.innerHTML = `<p> Hello inner HTML </p>`
// buttonsContainer.removeChild(button1);



//  Event & Event Handler: 
// Most common event: onClick, onChange, onSubmit
//button4.addEventListener("click", () =>{
//  alert('Button 4 pressed!!');
//})

//titleElement.addEventListener("click", ()=>{
//titleElement.textContent = 'Clicked';
//})


// onChange Event => <input/> - text-, number, password, email, color,
// Radio, checkbox, search, time, date, datetime, week, month, url,
// tel, file, <select>, <textarea>



// Contact Manager App

let contacts = [];
const form = document.getElementById('contact-form');
const contactList = document.getElementById('contact-list');
const nameErrorElement = document.getElementById('name-error');
const phoneErrorElement = document.getElementById('phone-error');

const inputValidation = (name, phone) => {
  let isValid = true;
if(name.length === 0) {
  nameErrorElement.textContent = 'Name can not be empty';
  nameErrorElement.style.color = 'red';
  isValid = false;
  }
if(phone.length === 0){
  phoneErrorElement.textContent = 'Phone can not be empty';
  phoneErrorElement.style.color = 'red';
  isValid = false;
  }
  return isValid;
}
form.addEventListener('submit', (event) =>{
  event.preventDefault();
  console.log('Form is Submitted');

const name = document.getElementById('name').value.trim();
const phone = document.getElementById('phone').value.trim();

if(inputValidation(name, phone)){
  //console.log(name, phone);
  const newContact = {
    id: Date.now().toString(),
    name: name ,
    phone: phone
  }
  contacts.push(newContact);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  rendercontacts();

  nameErrorElement.textContent = " " ;
  phoneErrorElement.textContent = " " ;
  form.reset();
}
});
const rendercontacts = () => {
  contacts = JSON.parse(localStorage.getItem('contacts'));
  contactList.innerHTML = "";
  contacts.forEach((contact) => {
  //console.log(contact);
  const contactLi = document.createElement("li");
  contactLi.textContent = `Name: ${contact.name}, Phone: ${contact.phone}`;
  contactList.appendChild(contactLi);
  })
}
window.addEventListener("DOMContentLoaded", rendercontacts);

































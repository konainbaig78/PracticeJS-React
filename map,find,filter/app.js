//CLASS 2

//map method
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// const num=[5, 10, 15]
// const addingNum=num.map(num=>num+1)
// console.log(addingNum);

// const num2= [2, 4, 6, 8];
// const dNum=num2.map(num=>num*2)
// console.log(dNum);

// const words = ["apple", "banana", "mango"];
// const capitWords= words.map(words=>words.charAt(0).toUpperCase()+ words.slice(1))
// console.log(capitWords);

// const items = [
//   { name: "Burger", price: 300 },
//   { name: "Fries", price: 150 },
//   { name: "Drink", price: 100 }
// ];
// const addTax=items.map(items=> {
//     const tax= items.price*0.10
//     return{
//         name: items.name,
//         priceWithTax: items.price+tax
//     }
// })
// console.log(addTax);



//filter method
// const nums = [1, 2, 3, 4, 5, 6];
// const evenNums= nums.filter(num=>num%2 === 0)
// console.log(evenNums);

// const products = [
//   { name: "Laptop", price: 1500 },
//   { name: "Mouse", price: 500 },
//   { name: "Phone", price: 1200 },
// ];
// const lessThan=products.filter(products=>products.price<1000)
// console.log(lessThan);

/*const products = [
  { name: "Phone", inStock: true },
  { name: "Charger", inStock: false },
  { name: "Case", inStock: true }
];
const outOfStock=products.filter(products=> products.inStock)
console.log(outOfStock);*/


//find() method

// const names = ["Ali", "Ahmed", "Zara", "Muhammad"];
// const longName=names.find(name=>name.length>7)
// console.log(longName);

// const students = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Sana" },
//   { id: 3, name: "Hamza" },
// ];
// const idFind=students.find(students=>students.id===3)
// console.log(idFind);

// const students = [
//   { name: "Ali", score: 88 },
//   { name: "Sana", score: 92 },
//   { name: "Hamza", score: 79 }
// ];
// const topScore=students.find(students=>students.score>90)
// console.log(topScore);



//includes()

// const fruits = ["apple", "banana", "mango"];
// const findFruit=fruits.includes("apple")
// console.log(findFruit);

// const cart = ["milk", "bread", "eggs"];
// const outOfStock = ["bread", "jam"];
// const hasOutOfStockItem = cart.some(item => outOfStock.includes(item));

// console.log(hasOutOfStockItem);



//forEach loop

// const names = ["Sara", "Ayesha", "Iqra"];
// const greetNames=names.forEach(names=> console.log( `Hello ${names}`))
// console.log(greetNames); console.log andr isliye kia h q k forEach value return nhi krta

//reduce()
//reduce the value to a single value like adding all number in a array.

//Sum of even numbers
// const nums = [1, 2, 3, 4, 5, 6];
// const sumEven= nums.filter(nums=>nums%2 === 0 ).reduce((sum,nums)=>sum+nums,0)
// console.log(sumEven);

// const trips = [
//   { from: "A", to: "B", fare: 50 },
//   { from: "B", to: "C", fare: 70 },
//   { from: "C", to: "A", fare: 60 }
// ];
// const totalFare=trips.reduce((total,fare)=>total+fare.fare,0)
// console.log(totalFare);


//Set
//help in storing unique values of any type
//Unique Elements

// const arr = [1, 2, 2, 3, 4, 4, 5];
// const uniqueValue=[...new Set(arr)]
// console.log(uniqueValue);

// const emails = ["a@gmail.com", "b@gmail.com", "a@gmail.com", "c@yahoo.com", "b@gmail.com"];
// const uniqueEmails=[...new Set(emails)]
// console.log(uniqueEmails);

//  const people = [
//   { name: "Areeba", age: 17 },
//   { name: "Zara", age: 22 },
//   { name: "Hassan", age: 19 }
// ];
// const adult=people.filter(adult=>adult.age>18).length
// console.log(adult);

//10% discount
// const products = [
//   { name: "Laptop", price: 5000 },
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1500 }
// ];
// const discount=products.map((product)=>product.price>1000 ? product.price * 0.9 : product.price)
// console.log(discount);

// const friends = ["Bilal", "Asad", "Zoya", "Ali", "Ahmed"];
// const nameA=friends.find(name=>name.startsWith("A"))
// console.log(nameA);



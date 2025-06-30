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


//includes()

// const fruits = ["apple", "banana", "mango"];
// const findFruit=fruits.includes("apple")
// console.log(findFruit);

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

//Set
//help in storing unique values of any type
//Unique Elements

// const arr = [1, 2, 2, 3, 4, 4, 5];
// const uniqueValue=[...new Set(arr)]
// console.log(uniqueValue);

 
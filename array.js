// # js-array-tasks



// ### 1. Declare an array 
// 1. Declare an array with 5 elements containing fruits
// 2. console log the 3rd index element
// 3. change the value of the 2nd index element to jambura
// 4. console log the final array



const fruit = ["Apple", "Orange", "Lemon", "Pineapple", "Banana"];
console.log(fruit[3]);
fruit[2] = "Jambura";
console.log(fruit);



// ---
// ### 2. Add or remove elements
// 1. Declare an array of 3 tourist destinations
// 2. Add a new tourist destination to your tourist array
// 3. Add two more to your array
// 4. Remove the last tourist destination you have added
// 5. display the final array as output



const touristDestination = ["shopnopuri", "vinnojogout", "gopirbagan"];
touristDestination.push("Ramsagur");
touristDestination.push("Nilsagur", "Bagan");
touristDestination.pop();
console.log(touristDestination);  




// ---

// ### 3. Checking Array Membership with ‘includes’

// **Instructions:**

// 1. Create an array of books containing different book.

// 2. Use the includes method to check if the array contains a javascript book.

// 3. Print a message to the console indicating whether the element is present in the array or not.



const books = ["Bangla", "English", "physic", "javascript", "java"];
if(books.includes("javascript")){
      console.log("javascript is present");
}else{
      console.log("javascript is not present");
}




// ---

// ### 4. Checking if it's an Array

// **Instructions:**

// 1. Create different variables, each containing either an array or a non-array value.

// 2. Now use isArray to check if each variable is an array.

// 3. Print a message to the console indicating whether each variable is an array or not.


const name = "Md. Al Amin Islam";
const age = 21;
const info = ["Rahim", "Ranachandi", "kishorgong", "Nilphamry"];
console.log(Array.isArray(name)); // false
console.log(Array.isArray(age)); // false
console.log(Array.isArray(info)); // true




// ----

// ### 5. Combining Arrays

// **Instructions:**

// 1. Create two arrays of your choice.
// 2. Use the concat method to combine the two arrays into a new array.
// 3. Print both the original arrays and the combined array using console.log().

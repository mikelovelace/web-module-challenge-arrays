/*REMEMBER TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/* 👀 This is your data ⬇ */
const originalFlavors = [
    "Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
    "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond"
]

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: Copy the Array! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
We have an array called originalFlavors with 31 flavors (see above).  In these tasks, we will be reading and writing data to this array.  
With all of these changes going on, we don't want to lose track of the actual, original 31 flavors.  So we need to copy the original array!

/*
Use the copy function below to do the following:
    1. receive an array as a parameter - you will pass in originalFlavors as an argument when the function is invoked.
    2. Return a copy of the received array  
*/

//    MY NOTES TASK 1
/* 1. function copy takes 1 parameter (array). array is a place holder for whatever array is passed in when the function is invoked.
   2. declare a variable called newArray and make it equal to the array parameter using a spread operator.
   3. return the results of array so it can be invoked
   4. invoke the copy function while passing in the array we want to copy as an argument
*/

function copy(array){
    const newArray = [...array]
    // console.log(newArray)
    return newArray;
}
copy(originalFlavors)
console.log(copy(originalFlavors))




/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Confirm that an array is exactly 31 flavors. Your function should accept:
    1. an array as a parameter
    2. Check to see if the array given is 31 flavors
    3. Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.
  

For Example: is31Flavors(originalFlavors) will return true if your code is working properly
*/

//    MY NOTES TASK 2
/* 1. function is31Flavors takes 1 parameter (array). array is a place holder for whatever array is passed in when the function is invoked.
   2. using an if statement, check to see if the length of our array is equal to 31
   3. return true if the length of the array is equal 31
   4. return false if the length of the array is not equal to 31
   5. invoke the function is31Flavors while passing in the name of the array we want to check the length of
*/

function is31Flavors(array){
    if(array.length === 31) {
        return true;
    } else {
        return false;
    }
   }
is31Flavors(originalFlavors)
console.log(is31Flavors(originalFlavors))

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor. 

Use the addFlavor function below to do the following:
    1. Receive an array
    2. Receive a new flavor as a string
    3. The function adds the passed flavor to the front of the passed array
    4. The function should return the resulting array

    For example: addFlavor("Rainbow Sherbert", originalFlavors) should return the array ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"]
*/

//    MY NOTES TASK 3
/* 1. function addFlavor takes 2 parameters. (array and newFlavor). newFlavor refers to thestring and array refers to the array name.
   2. Use the unshift method on array and pass in the newFlavor parameter to add a flavor
   3. return the results of the array.unshift method
   4. Invoke the addFlavor function while passing in the name of the flavor to add followed by the array in which the new flavor will be added to.
*/

function addFlavor(array, newFlavor){
    array.unshift(newFlavor);
    return array;
} 
console.log(addFlavor(originalFlavors, "Rainbow Sherbert"));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Houston, we have a problem! There are now 32 flavors in the originalFlavors array! Your task is to remove an item from the end of the array. 

Use the removeLastFlavor function below to do the following:
    1. Receive an array
    2. Remove the last item from the received array
    3. Return the resulting array

    For example: running removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]
*/


//    MY NOTES TASK 4
/* 1. function removeLastFlavor takes 1 parameter. (array). array refers to the array name.
   2. Use the pop method on array to remove the last item of the array
   3. return the results of the array
   4. Invoke the removeLastFlavor function while passing in the name of the array which you want to remove the item from.
*/

function removeLastFlavor(array){
   array.pop()
   return array
//    console.log(originalFlavors[30])
}
console.log(removeLastFlavor(originalFlavors))


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function that returns a flavor at a given index in the array.

Use the getFlavorByIndex function below to do the following:
    1. Recieve an array
    2. Receive a number (the desired index)
    3. Return the flavor located at the received index position

    For example: running getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully
*/

//    MY NOTES TASK 5
/* 1. function getFlavorByIndex takes 2 parameters. (array and index). array refers to the array and index refers to the index number of the array.
   2. create a variable and set it to equal array[index] where array refers to your array name and [index] refers to the index number inside of the array
   3. return the new variable
   4. Invoke the getFlavorByIndex function and pass in the arguments for your array and index number
*/

function getFlavorByIndex(array, index){
    const flavorIndex = array[index]
    return flavorIndex
}
console.log(getFlavorByIndex(originalFlavors, 2))



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, 
as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that single flavor from the array.  

Use the removeFlavorByName function below to do the following:
    1. Receive an array
    2. Receive a flavor as a string
    3. Remove the received flavor from the received array
    4. Return the resulting array that now contains one less flavor

    For example: running removeFlavorByName(originalFlavors, "Rocky Road") would return an array with the a length of 30 because Rocky Road would have been removed. 

    HINT: You can use .splice() for this
*/


//    MY NOTES TASK 6
/* 1. function removeFlavorByName takes 2 parameters. (array and flavor). array will refer to whatever array is being manipulated and flavor refers to a string of text which will contain the name of the flavor.
   2. search the array using indexOf and splice 1 item at the index position
   3. return the results of the array after splicing the item
   4. Invoke the removeFlavorByName function while passing in the name of the array and the name of the flavor to be removed
*/

function removeFlavorByName(array, flavor) {
    array.splice(array.indexOf(flavor), 1);
	return array;
}
console.log(removeFlavorByName(originalFlavors, "Rainbow Sherbert"));
console.log(originalFlavors.length);


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. 
Your task is to write a function that checks every item in the array for a string and returns a new array called filteredArray with only the values 
that contain the received string. This would allow you to be able to filter for "Vanilla", "Sherbet", "Lemon" etc. when different holidays roll around 
by passing in those specific strings.

Use the filterByWord function below to do the following:
    1. Receive an array
    2. Receive a string (example: "chocolate")
    3. Check to see if any of the flavors in the array contain that string
    4. If they do, add them to a new array
    5. Return the new array that contains the filtered flavors

    For example: filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond", "Chocolate Chip", "Chocolate Fudge", "Chocolate Mint", "Chocolate Ribbon"]

    HINT - you can use the .includes method to help you solve this

    DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem. 
*/


//    MY NOTES TASK 7
/* 1. function filterByWord takes 2 parameters. (array and flavor). array will refer to whatever array passed in as an argument when the function is invoked and flavor refers to a string of text which will contain the name of the flavor to be filtered into the new array.
   2. create a variable and set it equal to an empty array to hold all the filtered items.
   3. loop through the length of the array to get a list of all the items inside of it
   4. everytime it loops through the array, check the index/item of that array `array[i]` and see if it .includes the specified flavor.
   5. if specified flavor is found, push that flavor into the empty filteredArray we created
   6. return the results of the for loop
   7. invoke the function filterByWord while passing in the arguments for (array, flavor). 
      I.E. filterByWord(originalFlavors, "Chocolate")
*/
function filterByWord(array, flavor) {
	let filteredArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i].includes(flavor)) {
			filteredArray.push(array[i]);
		}
	}
	return filteredArray;
}
console.log(filterByWord(originalFlavors, "Chocolate"));


/* 💪💪💪💪💪🧁🍦🍨 STRETCH 🍨🍦🍫💪💪💪💪💪*/ 

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.

Use the getAverageWordLength function below to do the following:
    1. Receive the originalFlavors array
    2. Count how many words per item in the array
    3. Return the average number of words per item in the array

    For example: getAverageWordLength(originalFlavors) should return a number between 0 and 3.     
*/
function getAverageWordLength(){

}

/* 💪💪💪💪💪💪💪💪💪💪 STRETCH 2: 💪💪💪💪💪💪💪💪💪
Baskin Robins now offers new flavors, seasonal flavors, and even regional flavors. Write a function that will randomly select a total of 31 flavors 
from originalFlavors, currentFlavors, seasonalFlavors, and regionalFlavors and store it in an array called randomFlavors.

Use the getRandomFlavors function and new arrays below to do the following:
    1. Receive the four arrays with all the differnet flavors (originalFlavors is above, the others are below)
    2. Randomly pick flavors from all four arrays
    3. Return a new array called randomFlavors that has a lenght of 31

    For example: getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors) might return ["Strawberry Cheesecake", "Eggnog,"..."Chocolate"].
*/


function getRandomFlavors(/*code here*/){
    /*code here*/
}

// NEW DATA ARRAYS FOR STRETCH 2 ⬇️
const newFlavors = [
    "Date night",
    "U.S.S Butterscotch (Stranger Things special)",
    "Honey Almond",
    "Mint Chocolate Chip",
    "Chocolate",
    "Oreo® Cookies'n Cream",
    "Chocolate Chip",
    "Pralines 'n Cream",
    "Very Berry Strawberry",
    "Chocolate Chip Cookie Dough",
    "Old Fashioned Butter Pecan",
    "Jamoca®",
    "Jamoca® Almond Fudge",
    "Reese's® Peanut Butter Cup",
    "Rocky Road",
    "Peanut Butter ’n Chocolate",
    "Gold Medal Ribbon®",
    "World Class® Chocolate",
    "Cherries Jubilee",
    "Chocolate Fudge",
    "Daiquiri Ice",
    "Rainbow Sherbet",
    "Rainbow Swirl"
] 

const seasonalFlavors = [
    "America's Birthday Cake",
    "Baseball Nut®",
    "Blueberry Cheesecake",
    "Bourbon Street Pecan Pie",
    "Brownie Bar Mashup",
    "Cherry Cordial with Kisses",
    "Chocolate Mousse Royale",
    "French Vanilla",
    "Eggnog",
    "German Chocolate Cake",
    "Icing on the Cake",
    "Love Potion #31",
    "New York Cheesecake",
    "Nutty Coconut",
    "Peppermint",
    "Strawberry Cheesecake",
    "Rock ’n Pop Swirl",
    "Reese’s Peanut Butter Cup",
    "Trick Oreo Treat",
    "Winter White Chocolate",
    "made with Snickers®",
    "made with M&M's®",
    "Heath®",
    "Mango Tango"
]

const regionalFlavors = [
    "Pink Bubblegum",
    "Caramel Macchiato",
    "York Peppermint Pattie",
    "Cotton Candy",
    "Orange Sherbet",
    "Grape Ice",
    "Watermelon Ice",
    "Miami Vice Sorbet",
    "Splish Splash®",
    "Wild 'n Reckless Sherbet",
    "Lemon Custard",
    "Oregon Blackberry",
    "Bananas ‘n Strawberries",
    "Mississippi Mud",
    "Rum Raisin",
    "Creole Cream Cheese",
    "Chocolate Almond",
    "Fudge Brownie",
    "Banana Nut",
    "Black Walnut",
    "Cotton Candy Crackle",
    "Quarterback Crunch",
    "Chocolate Chocolate Chip Cheesecake",
    "Caramel 'n' Cookies"
]



/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    is31Flavors,
    addFlavor,
    removeLastFlavor,
    getFlavorByIndex,
    removeFlavorByName,
    copy,
    filterByWord,
    getAverageWordLength,
    getRandomFlavors
}

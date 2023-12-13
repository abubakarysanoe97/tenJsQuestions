// Do this in Javascript

// Question 1
// public static int getLastIndex(String[] names) {
//     return  0;
// }



function getLastIndex(studentFirstNames) {

    let lastIndex = -1;
    for (let i = 0; i < studentFirstNames.length; i++) {
      lastIndex = i;
    }
  
    return lastIndex;
  }
  
  let studentFirstNames = ["Berry", "Shaw", "Muss", "ABU"];
  let lastIndex = getLastIndex(studentFirstNames);
  
  console.log("Last index:", lastIndex);







// Question 2
// public static int getSecondToLastIndex(String[] names) {
//     return 0;
// }



function getSecondToLastIndex(arr) {
    return arr.length >= 2 ? arr.length - 2 : null;
  }

  const artist = ["Kodak", "aboogie", "future", "drake"];
  const secondToLastIndex = getSecondToLastIndex(artist);
  
  console.log("2nd to last index:", secondToLastIndex);




// Question 3
// public static String getFirstElement(String[] names) {
//     return null;
// }

function getFirstElement(arr) {
    return arr[0];
  }
  
  let bestPlayer = ["Kobe", "Curry", "AI", "Jordan"];
  let firstElement = getFirstElement(bestPlayer);
  
  console.log("First element:", firstElement);





// Question 4
// public static String getLastElement(String[] names) {
//   return null;
// }
function getLastElement(arr) {
    return arr.length > 0 ? arr[arr.length - 1] : null;
  }
  
  const abuFood = ["Fufu", "mac&Chees", "fish", "chips"];
  let lastElement = getLastElement(abuFood);
  
  console.log("Last element:", lastElement);
  




// Question 5
// public static String getSecondToLastElement(String[] names) {
//    return null;
// }
function getSecondToLastElement(songs) {
    return songs.length >= 2 ? songs[songs.length - 2] : undefined;
  }
  
  const songs = ["dear mama", "hard in the paint", "Empire State of Mind", "Sicko Mode"];
  const secondToLastSong = getSecondToLastElement(songs);
  
  console.log("2nd to last song:", secondToLastSong);






// Question 6
// public static int getSum(int[] ints) {
//      return 0;
// }
function getSum(number1, number2) {
    return number1 + number2;
  }
  
  const result = getSum(95, 7);
  console.log("Sum of 95 and 7 is:", result);







// Question 7
//  public static int getAverage(int[] ints) {
//     return 0;
// }
function getAverage(numbers) {
    if (numbers.length === 0) {
      return undefined; //handle if array is empty
    }
  
    const sum = numbers.reduce((total, num) => total + num);
    return sum / numbers.length;
  }
  

  const average1 = getAverage([89, 83.5]);
  console.log("Average of [89, 69] is:", average1);
  




// Question 8
// public static String extractAllOddNumbers(int[] numbers) {
//         return null;
// }

function extractAllOddNumbers(array) {
    return array.filter(num => num % 2 !== 0);
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const oddNumbers = extractAllOddNumbers(numbers);
console.log("Odd numbers:", oddNumbers);


// Question 9
// public static String extractAllEvenNumbers(int[] numbers) {
//   return null;
// }

function extractAllEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }

  const evenNumbers = extractAllEvenNumbers(numbers);
  console.log("Even numbers:", evenNumbers);



// Question 10
// public static boolean contains(String[] names, String element) {
//     return false;
// }
function contains(arr, element) {
    return arr.includes(element);
  }
  
 
  const kicks = ["flugames", "blackmabas", "shaqs", "antman"];
  
  
  const elementToCheck1 = "antman";
  console.log(`Array contains ${elementToCheck1}:`, contains(kicks, elementToCheck1));
  
  const elementToCheck2 = "nike";
  console.log(`Array contains ${elementToCheck2}:`, contains(kicks, elementToCheck2));



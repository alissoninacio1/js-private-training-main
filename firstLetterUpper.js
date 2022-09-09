/**
 * Capitalize the first letter of each word in a string
 * 
 * To achieve this, we split the words from the string and store them in an array
 * and then use the above concept on each element of the array and join all the
 * array elements together to get the string back. Let us take a look at this using
 * an example
 */


let text = "JOSIANE LUZ"

const onlyTheFirstCharToUpperCase = function (str) {
  
  // in the case of the whole string be in uppercase
  const transformedString = str.toLowerCase()

  // split the above string into an array of strings 
  // whenever a blank space is encountered, (each word will be an array element)
  // If (" ") is used as separator, the string is split between words.
  // https://www.w3schools.com/jsref/jsref_split.asp

  const stringArr = transformedString.split(" ")

  // loop through each element of the array and capitalize the first letter.
  // i = each word in the array
  // in the word, gets the first char applying the upper case, plus the remain string
  // slice(1) - will return all the string except the first letter
  // it is concatening the first char upper with the rest of the string in lower case

  for (let i = 0; i < stringArr.length; i++) {
    stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
  }

  // Join all the elements of the array back into a string with join method. 
  // The join() method returns the array as a string.
  // using a blankspace as a separator 
  const newString = stringArr.join(" ");
  
  console.log(newString);
}

onlyTheFirstCharToUpperCase(text)


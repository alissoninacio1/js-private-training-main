//--------------------------RegExp-----------------------

/** 
 * JavaScript String match()
 * The match() method matches a string against a regular expression
 *  https://www.w3schools.com/jsref/jsref_match.asp
 * 
 * 
 * SYNTAX
 * /pattern/modifier(s)
 * 
 * 
 * MODIFIERS 
 * g	Perform a global match (find all matches rather than stopping after the first match)
 * i	Perform case-insensitive matching
 * 
 * 
 * BRACKETS
 * [abc]	Find any character between the brackets
 * [^abc]	Find any character NOT between the brackets
 */


 function vowelsAndConsonants(s) {
    
    const vowels = s.match(/[aeiou]/gi).join(""), 
          consonants = s.match(/[^aeiou]/gi).join("")
    
        
    const wordVowels = Array.from(vowels), 
          wordConsonants = Array.from(consonants)
    
    //for of loop - The JavaScript for of statement loops through the values of an iterable object.
    for(const letter of wordVowels) {
        console.log(letter)     
    }
  
     for(const letter of wordConsonants) {
        console.log(letter)     
    }
  
  }
  
  vowelsAndConsonants("javascriptforloops")
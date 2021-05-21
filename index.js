const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?',
];

const titleCased = () => {
  return tutorials.map(x => x.split(" ")).map(y => y.map(word => word[0].toUpperCase() + word.substring(1)).join(" ")) 
}

// tutorials.map iterates through each title in the array
// (x => x.split(" ")) transforms each title into its own array 
// .map iterates through each array 
// (y => y.map iterates through each word in each array
// (word => word[0].toUpperCase() each word is transformed into its capital first letter
// + word.substring(1) concatenates that capital first letter with the rest of the word

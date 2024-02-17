function isPalindrome(word) {
 /* let x = word.length-1;
  let y = [];
  for (i=0; i<word.length; i++){
    if (word[i] === word[x]){
    x--;
    return true;}
    else{
      return false;
    }
  }*/
  let reversedWord = word.split("").reverse().join("");
  return (word===reversedWord);
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

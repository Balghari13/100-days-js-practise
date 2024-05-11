console.log("=========================");
console.log("counting no of characters in a string");

function countChar(word, char) {
  word = word.toLowerCase();
  char = char.toLowerCase();

  let totalChar = word.split("").reduce((accum, curElm) => {
    if (curElm === char) {
      accum++;
    }
    return accum;
  }, 0);
  return totalChar;
}

console.log(countChar("Najmuddin Balghari Saqib", "A"));

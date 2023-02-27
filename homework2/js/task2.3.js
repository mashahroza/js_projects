// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) 
// и возвращает самое длинное слово в этой строке.


const findLongestWord = function(string) {
    const splitString = string.split(' ');
    let longestWord = "";
    
    for (word of splitString) {
        // console.log(word);
        // console.log(word.length);

        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }

return longestWord;
};


console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  
console.log(findLongestWord('Google do a roll'));
  
console.log(findLongestWord('May the force be with you'));
// Write your solution below:
function translatePigLatain(str){
    let firstVowel = str.search(/[aeiou]/);
    
    return firstVowel === 0 ? str + "yay" : str.substr(firstVowel) + str.substr(0, firstVowel) + "ay";
}

console.log(translatePigLatain("Hello world this is pig latin"))
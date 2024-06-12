//A program that enables a user to capitalize each word in
//the sentence

function capitalizeWord(sentence){
    const words=sentence.split(' ')
    const capitalizeWords=words.map(word=>word.charAt(0).toUpperCase()+words.slice(1));
    return capitalizeWords.join(' ')

}
const sentence="I can code"
console.log(capitalizeWord(sentence))
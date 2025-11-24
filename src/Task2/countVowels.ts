const str = "subhashini";
let count = 0;
for (let char of str.toLowerCase()) {
    if ("aeiou".includes (char)) count++;
}
console.log(`Vowel: ${count}`);

function countVowels(str){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count;

    for (let i =0; i < str.lenght(); i++){
        str[i] = vowels
        count++
    }
    return count
}

print("Total vowel", countVowels("This is none"))
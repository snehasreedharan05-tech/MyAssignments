//Find Occurences -Array
let nums = [2,4,5,2,1,2]
const k= 2

count=0
for (let i=0; i< nums.length;i++ ){
    if(nums[i]== k){ 
        count ++
}
}
console.log ("Number of occurences ="+ " " + count)
console.log("-------------------------------------------------------------------------")

// String
//Example 1

let s = ["Hello","World"]
let t=(s[1])
console.log(t.length)

//Example 2

let value = " fly me to the moon "
value = (value.trim().split (" "))
console.log (value)
let q = (value[4])
console.log(q.length)

//Example 3

function isAnagram(str1, str2) {
     str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    let sorted1 = str1.split("").sort().join("");
    let sorted2 = str2.split("").sort().join("");

   return sorted1 === sorted2;
    console.log(" Is an Anagram")
}

console.log(isAnagram('listen', 'silent')); 
console.log(isAnagram('hello', 'world'));   




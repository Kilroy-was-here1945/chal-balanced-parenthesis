// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

let string = sample1

arr1 = []
arr2 = []


    let arr = [...new Set(string)]
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '('){
         arr1.push('(')
        }
     if(arr[i] === ')'){
         arr2.push(')')
    }}


console.log(arr1)
if(arr1.length > arr2.length){
    console.log('there are more ( than )')
}
if(arr2.length > arr1.length){
    console.log('there are more ) than (')
}
if(arr1.length === arr2.length) {
    console.log('there are the same amount of both ( and )')
}


// Write your solution below:
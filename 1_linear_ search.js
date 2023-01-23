const a = [1, 4, 6, 3, 0, 5, 8, 9, 67, 64, 5, 34, 2]
let count = 0
const linearSearch = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        count += 1
        if(arr[i] === item){
            return i
        }
    }
 return null
}

console.log(linearSearch(a, 2))
console.log("COUNT", count)
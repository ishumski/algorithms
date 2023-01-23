const sortedArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0

const binarySearch = (arr, item) => {
    let start = 0
    let end = arr.length
    let middle
    let position = null

    while (start <= end) {
        count += 1
        middle = Math.floor((start + end) / 2)// среднее количество элементов по индексу

        if (arr[middle] === item) { //если elem полученный по индексу равен item, возвращаем позицию
            console.log('condition_1')
            position = middle
            return position
        }
        if (item < arr[middle]) {
            console.log('condition_2')
            end = middle - 1
        } else { //item > elem
            console.log('condition_3')
            start = middle + 1
        }
    }
    return position
}

console.log('binarySearch', binarySearch(sortedArray, 13))
console.log('count', count)

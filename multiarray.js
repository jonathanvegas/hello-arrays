// first element of first subarray
let multiArr = [[10,20,70], [30,40,80], [50]]

// function findElem(multiArr){
//     return multiArr[0][0]
// }
// console.log(findElem(multiArr))

// last element of the last subarray
function lastElem(multiArr){
    const row = multiArr.length - 1
    const col = multiArr[row].length - 1
    return multiArr[row][col]
    //return multiArr[multiArr.length - 1][multiArr.length - 1]
}
console.log(lastElem(multiArr))
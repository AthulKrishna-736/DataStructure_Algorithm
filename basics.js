
function findLargest(arr) {
    let largest = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i] < largest){
            largest = arr[i];
        }
    }
    return largest;
}

console.log(findLargest([10,3,5,6,245,56,246,4,8]))
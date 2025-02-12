// reverse of array
function reverseArray(arr){
    let reversed =[];
    for(let i=arr.length-1;i>=0;i--){
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray([1,3,5,9]));

//second largest number

function secondLargest(arr){
    let largest= -Infinity, second= -Infinity;
    for(let num of arr){
        if(num>largest){
            second = largest;
            largest = num;
    }else if(num > second && num < largest){
        second = num;

    }
    }
    return second;
}console.log(secondLargest([14,56,34,24]));

//merge two arrays without duplicates


function mergeArrays(arr1, arr2){
    return[...new Set([...arr1, ...arr2])];

}
console.log(mergeArrays([1,2,3,4], [1,6,3,9]));


//frequency of each element of an array

function frequencyArray(arr){
    let freq ={};
    for(let num of arr){
        freq[num] = (freq[num] || 0)+1;
    }
    return freq;
}
console.log(frequencyArray([1,2,1,2,3,4]));

// Manual version of includes method

function manualInclude(arr, value){
    for(let item of arr){
        if(item === arr)
            return true; 
        }
        return false;
    }

console.log(manualInclude([1, 2, 3], 2));
console.log(manualInclude([1, 2, 3], 4));


//shift elements of array to left by one position

function shiftArray(arr){
    if(arr.length === 0) return arr;
    let first = arr.shift();
    arr.push(first);
    return arr;
}
console.log(shiftArray([1,2,3,4,5,6]));

//remove duplicates in array


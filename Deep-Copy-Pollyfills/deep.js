// Deep copy pollyfills

let arr = [1,2,[3,4,5]]
// let brr = arr


function deepCopy(val){

    if(["string", "number", " boolean"].includes(typeof val)){
        return val
    }

    if(Array.isArray(val)){
        return val.map((el)=> deepCopy(el))
    }
}

let brr = deepCopy(arr);
brr[2].push(6);
console.log(arr)
console.log(brr)
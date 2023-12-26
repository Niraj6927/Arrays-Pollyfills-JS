// Array flat
let arr = [1,2,[[3,4,]]]

// console.log(arr.flat(1)) // [ 1, 2, 3, 4 ]

Array.prototype.myflat = function(depth){
    // console.log(this)
    let res = [];
    if(!Array.isArray(this)){
        throw new Error(`${this}.flat is not a function `)
    }
    // this is array
    this.forEach((elem)=>{
        if(Array.isArray(elem) && depth > 0){
            
           res.push(...elem.myflat(depth - 1)) // call myflat method call recursively
           // this complete methods return into another array(spread this array) 
        }else{
           res.push(elem);
        }
    } )

    return res;
}

console.log(arr.myflat(1))

// Dry run
// F([1,2,[3,4]]) => res = [] => [1,2] =>
// F([3,4]) => res = [] => [3,4] =>
// return back to parent caller => res = [1,2,3,4]
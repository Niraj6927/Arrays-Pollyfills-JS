require('./reduce')

describe("reduce methods", ()=>{
    test("reduce test case", ()=>{
        const arr = [1, 2, 3, 4, 5];

        const res = arr.myReduce((acc, curr) => {
          return (acc += curr);
        }, 0);

        const expectRes = 15;
        expectRes(res).toEqual(expectRes);
    })
})
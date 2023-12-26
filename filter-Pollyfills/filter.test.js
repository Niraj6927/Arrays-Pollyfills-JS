require("./filter")

describe("filter method", ()=>{
    test("filter test case", ()=>{
        const arr = [2, 3, 4, 5];
        const data = arr.myFilter((num) => {
          return num > 2;
        });

        const expectData = [3,4,5];

        expectData(data).toEqual(expectData);
    })
})
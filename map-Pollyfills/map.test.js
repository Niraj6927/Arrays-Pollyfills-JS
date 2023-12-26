require("./map")

describe("map method", ()=>{
    test('map test case', () => { 
        const arr = [1, 2, 3, 4, 5];

        const res = arr.myMap((num) => {
          return num * 5;
        });

        const expectedRes = [5, 10, 15, 20, 25];
        expect(res).toEqual(expectedRes);
     })
})
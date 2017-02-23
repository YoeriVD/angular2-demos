import { OrderByPipe } from './order-by.pipe'

describe("Order by pipe", () => {
    let orderByPipe: OrderByPipe;
    beforeEach(() => orderByPipe = new OrderByPipe());
    let testArray = [
        { id: 1, text: 'b' },
        { id: 3, text: 'a' },
        { id: 2, text: 'c' },
    ]
    it("should order a list by text", () => {
        let result = orderByPipe.transform(testArray, 'text');
        let resultTexts = result.map(item => item.text);
        expect(resultTexts).toEqual(['a','b','c']);
    });
    it("should order a list by id", () => {
        expect(orderByPipe.transform(testArray, 'id').map(item => item.id)).toEqual([1,2,3]);
    })
});

































// import {OrderByPipe} from './order-by.pipe'
// describe("OrderByPipe", () => {
//     let orderByPipe : OrderByPipe;
//     beforeEach(() => orderByPipe = new OrderByPipe())
//     let testArray = [
//         {id: 1, text : 'c'},
//         {id: 3, text : 'a'},
//         {id: 2, text : 'b'},
//     ]
//     describe("transform", () => {
//         it("should order elements by text property",() => {
//             expect(orderByPipe.transform(testArray, 'text').map(o => o.text)).toEqual(['a','b','c']);
//         });
//         it("should fail", ()=> {
//             expect(true).toBe(false);
//         })
//     });
// })
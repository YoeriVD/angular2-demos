import { OrderByPipe } from "./orderby.pipe"

describe("order by pipe", () => {

    let pipe : OrderByPipe;

    beforeEach(() => pipe = new OrderByPipe())

    describe("transform", () => {

        const testArray = [
            { id : 4, title : "e"},
            { id : 3, title : "a"},
            { id : 2, title : "b"},
            { id : 1, title : "c"},
            { id : 5, title : "d"}
        ]
        it("should do nothing if the value is null", () => {
            expect(pipe.transform(testArray)).toBe(testArray);
        })

        it("should order the array by property id", () => {
            const result = pipe.transform(testArray, 'id');
            expect(result.map(e => e.id)).toEqual([1,2,3,4,5]);
        })

        
        it("should order the array by property title", () => {
            const result = pipe.transform(testArray, 'title');
            expect(result.map(e => e.title)).toEqual(["a","b","c","d","e"]);
        })
    })

});
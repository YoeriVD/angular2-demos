import { SkipPipe } from "./skip.pipe";

describe('SkipPipe', () => {
    let skip : SkipPipe;

    beforeEach(()=>{
        skip = new SkipPipe();
    });

    it('should remove the first element from a collection', () => {
        let input = [1, 2, 3];
        let amountToSkip = 1;
        let expectedOutput = [2, 3];

        expect(skip.transform(input, amountToSkip))
        .toEqual(expectedOutput);
    });

    it('should be able to handle undefined values', ()=>{
        expect(skip.transform(undefined, 3)).toBeUndefined();
    })
});
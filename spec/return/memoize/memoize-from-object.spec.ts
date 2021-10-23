import Memoized from "../../../dist/return/memoize";

it("enable console log", () => spyOn(console, 'log').and.callThrough());

describe("test", function() {

    let standard = {return:10};
    let memoize = new Memoized(standard);


    it(`check value`, () =>
        expect(memoize.return).toBe(10)
    );

    it(`change subject value`, () =>{
        standard.return = 20;
        expect(standard.return).toBe(20)
    });

    it(`recheck memoized value`, () => {

        expect(memoize.return).toBe(10)
    });

    it(`reset memoize`, () =>{

        memoize.clear();
        expect(memoize.return).toBe(20)
    });
});

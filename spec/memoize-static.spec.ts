import MemoizeStatic from "../dist/memoize-static";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("basic", function() {

    let called = 0;
    let memoize = MemoizeStatic(function (number : number) : number {

        called++;
        return number + number;
    },1);


    it("check initial data", () => {

        expect(called).toBe(0)

    });

    it("call", () => {

        expect(memoize()).toBe(2)

        expect(called).toBe(1)

    });

    it("2nd call", function() {

        expect(memoize()).toBe(2)
        expect(called).toBe(1)

    });


});





import Memoize from "../dist/memoize";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("basic", function() {


    let called = 0;
    let memoize = Memoize(function (number : number) : number {

        called++;
        return number + number;
    },1);


    it("check initial data", () => {

        expect(called).toBe(0)
        expect(memoize.subject.argument).toEqual([1])
        expect(memoize.memoize.memoized).toBeFalse();

    });

    it("call", () => {

        expect(memoize()).toBe(2)
        expect(memoize.return).toBe(2)

        expect(called).toBe(1)
        expect(memoize.memoize.memoized).toBeTrue();
    });

    it("2nd call", function() {

        expect(memoize()).toBe(2)
        expect(memoize.return).toBe(2)
        expect(called).toBe(1)
        expect(memoize.memoize.memoized).toBeTrue();
    });

    describe("modify", function() {

        it("change argument", () => {


            memoize.subject.subject.argument = [2];
            expect(memoize()).toBe(2)
        });

        it("reset", () => {
            memoize.memoize.clear();

            expect(called).toBe(1)
            expect(memoize()).toBe(4)
            expect(memoize.return).toBe(4)
            expect(called).toBe(2)
        });

    });

});





import * as Util from "util";
import Memoize from "../dist/memoize";
import Type from "../dist/boolean/type";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});




describe("basic", function() {


    let called = 0;
    let memoize = Memoize({value:function (number : number) : number {

        called++;
        return number + number;
    }, argument:[1]});


    it("check initial data", () => {

        expect(called).toBe(0)
        expect(memoize.subject.argument).toEqual([1])
        expect(memoize.memoized).toBeFalse();

    });

    it("call", () => {

        expect(memoize()).toBe(2)
        expect(memoize.return).toBe(2)

        expect(called).toBe(1)
        expect(memoize.memoized).toBeTrue();
    });

    it("2nd call", function() {

        expect(memoize()).toBe(2)
        expect(memoize.return).toBe(2)
        expect(called).toBe(1)
        expect(memoize.memoized).toBeTrue();
    });

    describe("modify", function() {

        it("change argument", () => {


            memoize.subject.subject.argument = [2];
            expect(memoize()).toBe(2)
        });

        it("reset", () => {
            memoize.clear();

            expect(called).toBe(1)
            expect(memoize()).toBe(4)
            expect(memoize.return).toBe(4)
            expect(called).toBe(2)
        });

    });

});





import * as Util from "util";
import Memoize from "../dist/memoize";
import Type from "../dist/boolean/type";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("memoize", function() {

    let called = 0;
    let memoize = Memoize(function (number : number) {

        called++;
        return number + number;
    }, 1);


    describe("1st call", function() {

        it("return valid", () => expect(memoize()).toBe(2));
        it("check call count", () => expect(called).toBe(1));
    });

    describe("2st call argument equal as 1st call", function() {

        it("return valid", () => expect(memoize()).toBe(2));
        it("check call count", () => expect(called).toBe(1));
    });

});



// describe("invalid", function() {
//
// });

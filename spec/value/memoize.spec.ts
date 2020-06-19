import * as Util from "util";
import Memoize from "../../dist/value/memoize";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});



describe("basic", function() {

    let called = 0;
    let fn = function (number : number) {

        called++;
        return number + number;
    };

    let callback = new Memoize(fn, [1]);

    it('validate initial data', function () {

        expect(callback.argument).toEqual([1]);
        expect(callback.functions).toEqual(fn);
        expect(callback.valid).toBeFalse();
        expect(called).toBe(0);

    });

    it('validate value', function () {

        expect(callback.valid).toBeFalse();
        expect(callback.value).toEqual(2);
        expect(callback.valid).toBeTrue();
        expect(called).toBe(1);

    });

    it('change argument', function () {

        callback.argument = [2];
        expect(callback.valid).toBeTrue();
        expect(callback.argument).toEqual([2]);
        expect(called).toBe(1);
    })

    it('validate value', function () {

        expect(callback.value).toEqual(2);
        expect(callback.valid).toBeTrue();
    });


    it('reset', function () {

        callback.clear();
    });

    it('validate value', function () {

        expect(called).toBe(1);
        expect(callback.valid).toBeFalse();
        expect(callback.value).toEqual(4);
        expect(callback.valid).toBeTrue();
        expect(called).toBe(2);

    });
});





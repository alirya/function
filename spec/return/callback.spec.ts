import Callback from '../../dist/return/callback.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('basic', function() {

    const fn = function (number : number) {

        return number + number;
    };

    const callback = new Callback.Parameters(fn, [1]);

    it('validate initial data', function () {

        expect(callback.argument).toEqual([1]);
        expect(callback.callback).toEqual(fn);

    });

    it('validate value', function () {

        expect(callback.return).toEqual(2);

    });

    it('change argument', function () {

        callback.argument = [2];
        expect(callback.argument).toEqual([2]);

    });

    it('validate value', function () {

        expect(callback.return).toEqual(4);

    });
});





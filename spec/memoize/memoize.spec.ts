import Memoize from '../../dist/memoize.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('basic', function() {

    let called = 0;
    const memoize = Memoize.Parameters(function (number : number) : number {

        called++;
        return number + number;
    },1);


    it('check initial data', () => {

        expect(called).toBe(0);
        expect(memoize.container.subject.argument).toEqual([1]);
        expect(memoize.container.memoized).toBeFalse();

    });

    it('call', () => {

        expect(memoize()).toBe(2);
        expect(memoize.container.return).toBe(2);

        expect(called).toBe(1);
        expect(memoize.container.memoized).toBeTrue();
    });

    it('2nd call', function() {

        expect(memoize()).toBe(2);
        expect(memoize.container.return).toBe(2);
        expect(called).toBe(1);
        expect(memoize.container.memoized).toBeTrue();
    });

    describe('modify', function() {

        it('change argument', () => {


            memoize.container.subject.argument = [2];
            expect(memoize()).toBe(2);
        });

        it('reset', () => {
            memoize.container.clear();

            expect(called).toBe(1);
            expect(memoize()).toBe(4);
            expect(memoize.container.return).toBe(4);
            expect(called).toBe(2);
        });

    });

});


describe('with container', function() {

    let called = 0;
    const memoize = Memoize.Parameters(function (number : number) : number {

        called++;
        return number + number;
    },1);


    it('check initial data', () => {

        expect(called).toBe(0);
        expect(memoize.container.subject.argument).toEqual([1]);
        expect(memoize.container.memoized).toBeFalse();

    });

    it('call', () => {

        expect(memoize()).toBe(2);
        expect(memoize.container.return).toBe(2);

        expect(called).toBe(1);
        expect(memoize.container.memoized).toBeTrue();
    });

    it('2nd call', function() {

        expect(memoize()).toBe(2);
        expect(memoize.container.return).toBe(2);
        expect(called).toBe(1);
        expect(memoize.container.memoized).toBeTrue();
    });

    describe('modify', function() {

        it('change argument', () => {


            memoize.container.subject.argument = [2];
            expect(memoize()).toBe(2);
        });

        it('reset', () => {
            memoize.container.clear();

            expect(called).toBe(1);
            expect(memoize()).toBe(4);
            expect(memoize.container.return).toBe(4);
            expect(called).toBe(2);
        });

    });

});





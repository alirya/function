import DynamicMemoize from '../dist/dynamic-memoize-parameters';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('memoize', function() {

    let called = 0;
    let memoize = DynamicMemoize(function (number : number) {

        called++;
        return number + number;
    });

    describe('not call', function() {

        it('check container length', () => expect(memoize.container.memoized.length).toBe(0));
        it('check call count', () => expect(called).toBe(0));
    });

    let firstArgument = 1;

    describe('1st call', function() {

        it('return valid', () => expect(memoize(firstArgument)).toBe(2));
        it('check call count', () => expect(called).toBe(1));
        it('check container length', () => expect(memoize.container.memoized.length).toBe(1));
        it('check container return', () => expect(memoize.container.memoized[0].return).toBe(2));
        it('check container argument', () => expect(memoize.container.memoized[0].argument).toEqual([1]));
    });

    describe('2st call argument equal as 1st call', function() {

        it('return valid', () => expect(memoize(firstArgument)).toBe(2));
        it('check call count', () => expect(called).toBe(1));
        it('check container length', () => expect(memoize.container.memoized.length).toBe(1));
        it('check container return', () => expect(memoize.container.memoized[0].return).toBe(2));
        it('check container argument', () => expect(memoize.container.memoized[0].argument).toEqual([1]));
    });

    let secondArgument = 10;

    describe('3rd call argument', function() {

        it('return valid', () => expect(memoize(secondArgument)).toBe(20));
        it('check call count', () => expect(called).toBe(2));
        it('check container length', () => expect(memoize.container.memoized.length).toBe(2));
        it('check container return', () => expect(memoize.container.memoized[1].return).toBe(20));
        it('check container argument', () => expect(memoize.container.memoized[1].argument).toEqual([10]));
    });
});


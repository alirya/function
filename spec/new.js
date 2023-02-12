import New from '../dist/new.js';
it('force console log', () => { spyOn(console, 'log').and.callThrough(); });
describe('array', function () {
    let fn = New(Array);
    it('compiler compatible', () => {
        fn(1, 2, 3, 4);
        // @ts-expect-error
        fn('1', '2', '3', '4');
    });
    it('validate result', () => {
        expect(fn(1, 2, 3, 4)).toEqual([1, 2, 3, 4]);
    });
});
describe('user defined', function () {
    class R {
        constructor(a, b, c) {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }
    let fn = New(R);
    it('compiler compatible', () => {
        let result = fn('1', 2, true);
        // @ts-expect-error
        fn('1', '2', '3', '4');
    });
    it('validate result', () => {
        let result = fn('1', 2, true);
        expect(result.a).toEqual('1');
        expect(result.b).toEqual(2);
        expect(result.c).toEqual(true);
    });
});
//# sourceMappingURL=new.js.map
import New from '../dist/new.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('array', function() {

    const fn = New<number[], number[]>(Array);

    it('compiler compatible', ()=>{

        fn(1,2,3,4);

        // @ts-expect-error
        fn('1','2','3','4');

    });

    it('validate result', ()=>{

        expect(fn(1,2,3,4)).toEqual([1,2,3,4]);
    });

});


describe('user defined', function() {

    class R {

        constructor(
            public a : string,
            public b : number,
            public c : boolean
        ) {
        }
    }

    const fn = New(R);

    it('compiler compatible', ()=>{

        const result : R = fn('1', 2, true);

        // @ts-expect-error
        fn('1','2','3','4');

    });


    it('validate result', ()=>{

        const result : R = fn('1', 2, true);

        expect(result.a).toEqual('1');
        expect(result.b).toEqual(2);
        expect(result.c).toEqual(true);
    });

});

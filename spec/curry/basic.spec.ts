import Curry from '../../dist/curry';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

type Return = {
    number: number,
    string: string,
    boolean: boolean,
    object: object
};

function Struct (
    number: number,
    string: string,
    boolean: boolean,
    object: object
) : Return {
    return {number, string, boolean, object};
}

describe('single', function() {

    let result : Return;

    const callback = Curry.Parameters(Struct, 'data', 1);

    it('call callback', () => {

        result = callback(1, true, new Map());
    });

    it('assert value', () => {

        expect(result.number).toBe(1);
        expect(result.string).toBe('data');
        expect(result.boolean).toBe(true);
        expect(result.object).toBeInstanceOf(Map);
    });

});


describe('multi', function() {

    let result : Return;

    const preCallback = Curry.Parameters(Struct, 'data 2', 1);
    const callback = Curry.Parameters(preCallback, new Set(), 2);

    it('call callback', () => {

        result = callback(11, false);
    });

    it('assert value', () => {

        expect(result.number).toBe(11);
        expect(result.string).toBe('data 2');
        expect(result.boolean).toBe(false);
        expect(result.object).toBeInstanceOf(Set);
    });

});


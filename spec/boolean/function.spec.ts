import Function from '../../dist/boolean/function.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('valid', function() {

    it('native', () => expect(Function(setTimeout)).toBe(true));
    it('anonymous', () => expect(Function(function () {})).toBe(true));
    it('callback', () => expect(Function( ()=>{})).toBe(true));
    it('native class', () => expect(Function( String)).toBe(true));
    it('class', () => expect(Function(class {})).toBe(true));
});

describe('invalid', function() {


    it('object', () => expect(Function({ data : true})).toBe(false));
    it('number', () => expect(Function(1)).toBe(false));
    it('string', () => expect(Function('a')).toBe(false));
});



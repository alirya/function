import Pipe from '../../dist/pipe.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('basic', function() {


    it('test single', function () {

        const pipe = Pipe(1)
        (num=>num+1);

        expect(pipe.returns).toEqual(2);

    });

    it('multi', function () {

        const pipe = Pipe(1)
        (num=>num+1)
        (num=>num+1);

        expect(pipe.returns).toEqual(3);

    });

    it('change type', function () {

        const pipe = Pipe(1)
        (num=>num+1)
        (num=>num+1)
        (num=>({num}));

        expect(pipe.returns).toEqual({num: 3});

    });

});

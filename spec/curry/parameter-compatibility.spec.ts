import CurryParameters from '../../dist/curry-parameters';
import CurryParameter, {CurryParameterArgument} from '../../dist/curry-parameter';

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

    let argument : CurryParameterArgument<typeof Struct, 1> = {
        callback : Struct,
        argument : 'data',
        position : 1
    };

    const parameter = CurryParameter(argument);
    const parameters = CurryParameters(argument.callback, argument.argument, argument.position);


    it('assert value', () => {

        expect(
            parameter(1, true, new Map())
        ).toEqual(
            parameters(1, true, new Map())
        );
    });

});



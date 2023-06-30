import {ConditionalCallParameters} from '../../dist/conditional-call.js';
import {ConditionalCallParameter} from '../../dist/conditional-call.js';
import {PrefixParameters} from '@alirya/string/prefix.js';
import {SuffixParameters} from '@alirya/string/suffix.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('basic', function() {

    expect(
        ConditionalCallParameters((a: string, b: string) => true, PrefixParameters, SuffixParameters)('base', '-')
    ).toBe(
        ConditionalCallParameter({
            condition : (a: string, b: string) => true,
            valid : PrefixParameters,
            invalid : SuffixParameters,
        })('base', '-')
    );

    expect(
        ConditionalCallParameters((a: string, b: string) => false, PrefixParameters, SuffixParameters)('base', '-')
    ).toBe(
        ConditionalCallParameter({
            condition : (a: string, b: string) => false,
            valid : PrefixParameters,
            invalid : SuffixParameters,
        })('base', '-')
    );
});


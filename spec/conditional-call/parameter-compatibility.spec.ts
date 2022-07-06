import {ConditionalCallParameters} from '../../dist/conditional-call.js';
import {ConditionalCallParameter} from '../../dist/conditional-call.js';
import {PrefixParameters} from '@alirya/string/prefix.js';
import {SuffixParameters} from '@alirya/string/suffix.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('basic', function() {

    expect(
        ConditionalCallParameters(true, PrefixParameters, SuffixParameters, 'base', '-')
    ).toBe(
        ConditionalCallParameter({
            valid : true,
            trueCallback : PrefixParameters,
            falseCallback : SuffixParameters,
            argument : ['base', '-']
        })
    );

    expect(
        ConditionalCallParameters(false, PrefixParameters, SuffixParameters, 'base', '-')
    ).toBe(
        ConditionalCallParameter({
            valid : false,
            trueCallback : PrefixParameters,
            falseCallback : SuffixParameters,
            argument : ['base', '-']
        })
    );
});


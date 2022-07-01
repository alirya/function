import {ConditionalCallParameters} from '../../dist/conditional-call';
import {ConditionalCallParameter} from '../../dist/conditional-call';
import {PrefixParameters} from '@alirya/string/prefix';
import {SuffixParameters} from '@alirya/string/suffix';

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


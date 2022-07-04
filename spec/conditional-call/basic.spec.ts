import ConditionalCallParameters from '../../dist/conditional-call';
import {PrefixParameters} from '@alirya/string/prefix';
import {SuffixParameters} from '@alirya/string/suffix';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('basic', function() {

    expect(
        ConditionalCallParameters.Parameters(true, PrefixParameters, SuffixParameters, 'base', '-')
    ).toBe(
        '-base'
    );

    expect(
        ConditionalCallParameters.Parameters(false, PrefixParameters, SuffixParameters, 'base', '-')
    ).toBe(
        'base-'
    );
});


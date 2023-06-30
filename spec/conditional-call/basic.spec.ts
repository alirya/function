import ConditionalCallParameters from '../../dist/conditional-call.js';
import {PrefixParameters} from '@alirya/string/prefix.js';
import {SuffixParameters} from '@alirya/string/suffix.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('basic', function() {

    expect(
        ConditionalCallParameters.Parameters<[string, string], string>(
            () => true, PrefixParameters, SuffixParameters)( 'base', '-')
    ).toBe(
        '-base'
    );

    expect(
        ConditionalCallParameters.Parameters<[string, string], string>(
            () => false, PrefixParameters, SuffixParameters)( 'base', '-')
    ).toBe(
        'base-'
    );
});


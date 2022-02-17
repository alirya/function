import ConditionalCallParameters from "../../dist/conditional-call-parameters";
import PrefixParameters from "@alirya/string/prefix-parameters";
import SuffixParameters from "@alirya/string/suffix-parameters";

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('basic', function() {

    expect(
        ConditionalCallParameters(true, PrefixParameters, SuffixParameters, 'base', '-')
    ).toBe(
        '-base'
    );

    expect(
        ConditionalCallParameters(false, PrefixParameters, SuffixParameters, 'base', '-')
    ).toBe(
        'base-'
    );
});


import ConditionalCallParameters from "../../dist/conditional-call-parameters";
import ConditionalCallParameter from "../../dist/conditional-call-parameter";
import PrefixParameters from "@alirya/string/prefix-parameters";
import SuffixParameters from "@alirya/string/suffix-parameters";

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


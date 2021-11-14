import CallbackParameter from "./return/callback";
import ReturnMemoize from "./return/memoize";
export default function MemoizeParameters(callback, ...argument) {
    const container = new ReturnMemoize(new CallbackParameter.Parameters(callback, argument));
    const func = function () {
        return container.return;
    };
    func.container = container;
    return func;
}
//# sourceMappingURL=memoize-parameters.js.map
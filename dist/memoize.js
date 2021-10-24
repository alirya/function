import { CallbackParameter } from "./return/callback";
import ReturnMemoize from "./return/memoize";
var Memoize;
(function (Memoize) {
    Memoize.Parameter = MemoizeParameter;
    Memoize.Object = MemoizeObject;
})(Memoize || (Memoize = {}));
export default Memoize;
/**
 * wrap given {@param callback} to new function and cache its return
 *
 * this more performant than {@link ./memoize.ts} but does not offer
 *
 * @param argument
 * used if cached return is not exits
 *
 * @callback
    * callback to be wrapped
 */
export function MemoizeParameter(callback, ...argument) {
    const container = new ReturnMemoize(new CallbackParameter(callback, argument));
    const func = function () {
        return container.return;
    };
    func.container = container;
    return func;
}
/**
 * object destructure version
 *
 * @param callback
 * @param argument
 */
export function MemoizeObject({ callback, argument }) {
    return MemoizeParameter(callback, ...argument);
}
//# sourceMappingURL=memoize.js.map
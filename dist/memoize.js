import ReturnCallback from "./return/callback";
import ReturnMemoize from "./return/memoize";
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
export default function Memoize(callback, ...argument) {
    const container = new ReturnMemoize(new ReturnCallback(callback, argument));
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
Memoize.object = function ({ callback, argument }) {
    return Memoize(callback, ...argument);
};
//# sourceMappingURL=memoize.js.map
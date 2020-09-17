import ReturnMemoize from "./return/memoize-from-object";
import ReturnCallback from "./return/callback";
/**
 * wrap given {@param data} {@link Callback} to new function and cache its return
 *
 * {@param data} {@link Argument} is used if cached return is not exits
 */
export default function MemoizeFromObject(data) {
    let merged;
    let callback = new ReturnCallback(data);
    let memoize = new ReturnMemoize(callback);
    let fn = function () {
        return memoize.return;
    };
    merged = fn;
    merged.container = memoize;
    return merged;
}
//# sourceMappingURL=memoize-from-object.js.map
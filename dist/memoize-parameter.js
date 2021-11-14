import MemoizeParameters from "./memoize-parameters";
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
/**
 * object destructure version
 *
 * @param callback
 * @param argument
 */
export default function MemoizeParameter({ callback, argument }) {
    return MemoizeParameters(callback, ...argument);
}
//# sourceMappingURL=memoize-parameter.js.map
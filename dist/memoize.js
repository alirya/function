import MemoizeFromObject from "./memoize-from-object";
/**
 * wrap given {@param callback} to new function and cache its return, with
 * memoization control option but less performant than {@link ./memoize-static.ts}
 *
 * @param argument
 * used if cached return is not exits
 *
 * @callback
 * callback to be wrapped
 */
export default function Memoize(callback, ...argument) {
    return MemoizeFromObject({
        callback: callback,
        argument: argument,
    });
}
//# sourceMappingURL=memoize.js.map
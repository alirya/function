import Callable from "./callable";
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
export default function MemoizeStatic<Function extends Callable>(callback: Function, ...argument: Parameters<Function>): () => ReturnType<Function>;

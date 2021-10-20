import Callable from "./callable";
import Argument from "./argument/argument";
import Callback from "./callback/callback";
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
export default function Memoize<Function extends Callable>({ callback, argument }: Callback<Function> & Argument<Parameters<Function>>): () => ReturnType<Function>;

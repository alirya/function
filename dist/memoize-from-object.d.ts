import Functions from "./function";
import ReturnMemoize from "./return/memoize-from-object";
import Callback from "./return/callback";
import Argument from "./argument/argument";
import Value from "@dikac/t-value/value";
/**
 * wrap given {@param data} {@link Value} to new function and cache its return
 *
 * {@param data} {@link Argument} is used if cached return is not exits
 */
export default function MemoizeFromObject<Fn extends Functions>(data: Argument<Parameters<Fn>> & Value<Fn>): Functions<[], ReturnType<Fn>> & ReturnMemoize<Callback<Fn>>;

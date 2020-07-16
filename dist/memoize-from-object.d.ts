import Functions from "./function";
import ReturnMemoize from "./return/memoize-from-object";
import ReturnCallback from "./return/callback";
import Argument from "./argument/argument";
import Callback from "./callback/callback";
/**
 * wrap given {@param data} {@link Callback} to new function and cache its return
 *
 * {@param data} {@link Argument} is used if cached return is not exits
 */
export default function MemoizeFromObject<Fn extends Functions>(data: Argument<Parameters<Fn>> & Callback<Fn>): Functions<[], ReturnType<Fn>> & ReturnMemoize<ReturnCallback<Fn>>;

import Functions from "./functions";
import ReturnMemoize from "./returns/memoize";
import Callback from "./returns/callback";
/**
 * wrap given {@param callable} to new function and cache its return
 *
 * {@param argument} is used if cached return is not exits
 */
export default function Memoize<Fn extends Functions>(callable: Fn, ...argument: Parameters<Fn>): Functions<[], ReturnType<Fn>> & ReturnMemoize<Callback<Fn>>;

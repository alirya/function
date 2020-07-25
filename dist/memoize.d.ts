import Functions from "./function";
import ReturnMemoize from "./return/memoize-from-object";
import Callback from "./return/callback";
/**
 * wrap given {@param callback} to new function and cache its return
 *
 * {@param argument} is used if cached return is not exits
 */
export default function Memoize<Fn extends Functions>(callback: Fn, ...argument: Parameters<Fn>): Functions<[], ReturnType<Fn>> & {
    container: ReturnMemoize<Callback<Fn>>;
};

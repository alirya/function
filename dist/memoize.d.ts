import Function from "./function";
import ReturnMemoize from "./return/memoize-from-object";
import Callback from "./return/callback";
/**
 * wrap given {@param callback} to new function and cache its return
 *
 * {@param argument} is used if cached return is not exits
 */
export default function Memoize<FunctionT extends Function>(callback: FunctionT, ...argument: Parameters<FunctionT>): Function<[], ReturnType<FunctionT>> & {
    container: ReturnMemoize<Callback<FunctionT>>;
};

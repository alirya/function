import ReturnMemoize from "./return/memoize-from-object";
import Callback from "./return/callback";
import Callable from "./callable";
/**
 * wrap given {@param callback} to new function and cache its return
 *
 * {@param argument} is used if cached return is not exits
 */
export default function Memoize<FunctionT extends Callable>(callback: FunctionT, ...argument: Parameters<FunctionT>): (() => ReturnType<FunctionT>) & {
    container: ReturnMemoize<Callback<FunctionT>>;
};

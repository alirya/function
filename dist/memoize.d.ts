import Functions from "./function";
import MemoizeCallable from "./value/memoize";
export default function Memoize<Fn extends Functions>(callable: Fn, ...argument: Parameters<Fn>): Functions<[], ReturnType<Fn>> & MemoizeCallable<Fn>;

import Io from "./io/io";
export default function DynamicMemoize<Fn extends (...argument: Arg) => Return, Arg extends any[], Return>(callable: Fn, compareArguments?: (cached: Arg, argument: Arg) => boolean): Fn & Container<Fn, Arg, Return>;
export declare class Container<Fn extends (...argument: Arg) => Return, Arg extends any[], Return> {
    private compare;
    readonly ios: Io<Arg, Return>[];
    constructor(compare: (cached: Arg, argument: Arg) => boolean);
    call(fn: Fn, argument: Arg): Io<Arg, Return>;
    get(argument: Arg): Io<Arg, Return> | null;
}

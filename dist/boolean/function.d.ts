import Callable from "../callable";
/**
 * check if {@param value} type is function
 */
declare function Function<Assumption extends Callable>(value: unknown): value is Assumption;
declare namespace Function {
    var param: number;
}
export default Function;

import Callable from "../callable";
import Guard from "../boolean/guard";
import Assert from "../assert/assert";
export default interface Callback<FunctionType extends Callable | Guard | Assert> {
    callback: FunctionType;
}

import Fn from "../function";
export default interface Callback<Function extends Fn> {
    callback: Function;
}

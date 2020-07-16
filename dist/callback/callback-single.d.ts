import FunctionSingle from "../function-single";
export default interface CallbackSingle<Argument = unknown, Return = unknown> {
    callback: FunctionSingle<Argument, Return>;
}

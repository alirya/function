import FunctionCall from "../argument/value/call";
/**
 * Use {@link ArgumentInterface} as argument to call function form {@link Callback}
 * and set return value to {@link Return}
 */
export default function Call(object) {
    object.return = FunctionCall(object);
    return object;
}
//# sourceMappingURL=call.js.map
/**
 * Use {@link Argument} as argument to call function form {@link Callback}
 */
export function CallParameter(callback, argument) {
    return callback(...argument);
}
export function CallObject({ callback, argument }) {
    return CallParameter(callback, argument);
}
var Call;
(function (Call) {
    Call.Parameter = CallParameter;
    Call.Object = CallObject;
})(Call || (Call = {}));
export default Call;
//# sourceMappingURL=call.js.map
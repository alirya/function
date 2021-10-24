export function FunctionParameter(valid, value) {
    if (valid) {
        return `value is function`;
    }
    else {
        return `value is not function`;
    }
}
export function FunctionObject({ valid, value }) {
    return FunctionParameter(valid, value);
}
var Function;
(function (Function) {
    Function.Parameter = FunctionParameter;
    Function.Object = FunctionObject;
})(Function || (Function = {}));
export default Function;
//# sourceMappingURL=function.js.map
export default function Function(valid, value) {
    if (valid) {
        return `value is function`;
    }
    else {
        return `value is not function`;
    }
}
Function.object = function ({ valid, value }) {
    return Function(valid, value);
};
//# sourceMappingURL=function.js.map
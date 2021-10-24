import { CallParameter } from "../argument/value/call";
export class CallbackParameter {
    constructor(callback, argument) {
        this.callback = callback;
        this.argument = argument;
    }
    get return() {
        return CallParameter(this.callback, this.argument);
    }
}
export class CallbackObject extends CallbackParameter {
    constructor({ argument, callback }) {
        super(callback, argument);
    }
}
var Callback;
(function (Callback) {
    Callback.Parameter = CallbackParameter;
    Callback.Object = CallbackObject;
})(Callback || (Callback = {}));
export default Callback;
//# sourceMappingURL=callback.js.map
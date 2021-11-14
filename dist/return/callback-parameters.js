import CallParameter from "../argument/value/call";
export default class CallbackParameters {
    constructor(callback, argument) {
        this.callback = callback;
        this.argument = argument;
    }
    get return() {
        return CallParameter.Parameters(this.callback, this.argument);
    }
}
//# sourceMappingURL=callback-parameters.js.map
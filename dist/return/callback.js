import Call from "../argument/value/call";
export default class Callback {
    constructor(callback, argument) {
        this.callback = callback;
        this.argument = argument;
    }
    get return() {
        return Call(this.callback, this.argument);
    }
}
Callback.object = class extends Callback {
    constructor({ argument, callback }) {
        super(callback, argument);
    }
};
//# sourceMappingURL=callback.js.map
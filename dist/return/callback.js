import Call from "../argument/value/call";
export default class Callback {
    constructor(subject) {
        this.subject = subject;
    }
    get return() {
        return Call(this.subject);
    }
    get argument() {
        return this.subject.argument;
    }
    get callback() {
        return this.subject.callback;
    }
}
//# sourceMappingURL=callback.js.map
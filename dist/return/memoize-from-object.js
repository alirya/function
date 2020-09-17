import ValueMemoize from "../return/memoize";
/**
 * Wrap {@link Return} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class MemoizeFromObject {
    constructor(subject) {
        this.subject = subject;
        this.memoize = new ValueMemoize({
            get return() {
                return subject.return;
            }
        });
    }
    get return() {
        return this.memoize.return;
    }
}
//# sourceMappingURL=memoize-from-object.js.map
/**
 * Wrap {@link Return} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize {
    constructor(subject) {
        this.subject = subject;
        this.clear();
    }
    get memoized() {
        return this.memoize !== undefined;
    }
    /**
     * clear cached value
     */
    clear() {
        this.memoize = undefined;
    }
    get return() {
        if (!this.memoized) {
            this.memoize = {
                return: this.subject.return
            };
        }
        return this.memoize.return;
    }
}
//# sourceMappingURL=memoize.js.map
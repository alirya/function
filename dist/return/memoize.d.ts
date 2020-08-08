import Return from "./return";
import Infer from "./value/infer";
/**
 * Wrap {@link Return} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<Container extends Return = Return> implements Readonly<Return<Infer<Container>>> {
    subject: Container;
    protected memoize: Return<Infer<Container>> | undefined;
    constructor(subject: Container);
    get memoized(): boolean;
    /**
     * clear cached value
     */
    clear(): void;
    get return(): Infer<Container>;
}

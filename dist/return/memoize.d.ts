import Returns from "./returns";
import Infer from "./infer/returns";
/**
 * Wrap {@link Returns} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<Container extends Returns = Returns> implements Readonly<Returns<Infer<Container>>> {
    subject: Container;
    protected memoize: Returns<Infer<Container>> | undefined;
    constructor(subject: Container);
    get memoized(): boolean;
    /**
     * clear cached value
     */
    clear(): void;
    get return(): Infer<Container>;
}

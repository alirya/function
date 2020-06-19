import Returns from "./returns";
import Infer from "./infer/returns";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * Wrap {@link Returns} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<Container extends Returns = Returns> implements Readonly<Returns<Infer<Container>>>, Readonly<Validatable<boolean>> {
    subject: Container;
    protected memoized: Returns<Infer<Container>> | undefined;
    constructor(subject: Container);
    get valid(): boolean;
    /**
     * clear cached value
     */
    clear(): void;
    get return(): Infer<Container>;
}

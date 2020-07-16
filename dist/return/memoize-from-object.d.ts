import Return from "./return";
import Infer from "./infer/return";
/**
 * Wrap {@link Return} and cache its value
 */
export default class MemoizeFromObject<Container extends Return = Return> implements Readonly<Return<Infer<Container>>> {
    subject: Container;
    protected memoize: Return<Infer<Container>> | undefined;
    constructor(subject: Container);
    get memoized(): boolean;
    /**
     * clear cached return
     */
    clear(): void;
    get return(): Infer<Container>;
}

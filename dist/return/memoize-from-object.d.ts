import Return from "./return";
import Infer from "./value/value";
import ValueMemoize from "../return/memoize";
/**
 * Wrap {@link Return} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class MemoizeFromObject<ReturnT extends Return> implements Readonly<Return<Infer<ReturnT>>> {
    subject: ReturnT;
    memoize: ValueMemoize<Readonly<Return<Infer<ReturnT>>>>;
    constructor(subject: ReturnT);
    get return(): Infer<ReturnT>;
}

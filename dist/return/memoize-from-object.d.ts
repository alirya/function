import Return from "./return";
import Infer from "./value/value";
import ValueMemoize from "../return/memoize";
/**
 * Wrap {@link Return} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class MemoizeFromObject<ReturnType extends Return> implements Readonly<Return<Infer<ReturnType>>> {
    subject: ReturnType;
    memoize: ValueMemoize<Readonly<Return<Infer<ReturnType>>>>;
    constructor(subject: ReturnType);
    get return(): Infer<ReturnType>;
}

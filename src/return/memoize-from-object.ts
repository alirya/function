import Return from "./return";
import Infer from "./value/value";
import ValueMemoize from "../return/memoize";

/**
 * Wrap {@link Return} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class MemoizeFromObject<
    ReturnT extends Return
    > implements
    Readonly<Return<Infer<ReturnT>>>
{
    public memoize : ValueMemoize<Readonly<Return<Infer<ReturnT>>>>;

    constructor(
        public subject : ReturnT
    ) {

        this.memoize = new ValueMemoize(<Return<Infer<ReturnT>>>{
            get return()  {
                return subject.return;
            }
        });
    }

    get return () : Infer<ReturnT> {

        return <Infer<ReturnT>>this.memoize.return;
    }

}

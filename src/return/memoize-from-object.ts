import Return from "./return";
import Infer from "./value/value";
import ValueMemoize from "@dikac/t-value/memoize";
import Value from "@dikac/t-value/value";

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
    public memoize : ValueMemoize<Readonly<Value<Infer<ReturnT>>>>;

    constructor(
        public subject : ReturnT
    ) {

        this.memoize = new ValueMemoize(<Value<Infer<ReturnT>>>{
            get value()  {
                return subject.return;
            }
        });
    }

    get return () : Infer<ReturnT> {

        return <Infer<ReturnT>>this.memoize.value;
    }

}

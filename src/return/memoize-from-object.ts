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
    Container extends Return
    > implements
    Readonly<Return<Infer<Container>>>
{
    public memoize : ValueMemoize<Readonly<Value<Infer<Container>>>>;

    constructor(
        public subject : Container
    ) {

        this.memoize = new ValueMemoize(<Value<Infer<Container>>>{
            get value()  {
                return subject.return;
            }
        });
    }

    get return () : Infer<Container> {

        return <Infer<Container>>this.memoize.value;
    }

}

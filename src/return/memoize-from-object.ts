import Return from "./return";
import Infer from "./infer/return";
import ObjectProperty from "@dikac/t-object/value/property";
import ValueMemoize from "@dikac/t-value/memoize";

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
    public memoize : ValueMemoize<ObjectProperty<'return', Container>>;

    constructor(
        public subject : Container
    ) {

        let value = new ObjectProperty(subject, 'return');
        this.memoize = new ValueMemoize(value);
    }

    get return () : Infer<Container> {

        return <Infer<Container>>this.memoize.value;
    }

}

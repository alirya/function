import Return from "./returns";
import Infer from "./infer/returns";
import ObjectProperty from "@dikac/t-value/object-property";
import ValueMemoize from "@dikac/t-value/memoize";

/**
 * Wrap {@link Return} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<
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

        return this.memoize.value;
    }

}

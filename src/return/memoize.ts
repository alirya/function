import Returns from "./returns";
import Infer from "./infer/returns";
import Validatable from "@dikac/t-validatable/validatable";

/**
 * Wrap {@link Returns} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<
    Container extends Returns = Returns
> implements
    Readonly<Returns<Infer<Container>>>,
    Readonly<Validatable<boolean>>
{
    protected memoized : Returns<Infer<Container>>|undefined;

    constructor(
        public subject : Container
    ) {
        this.clear();
    }

    get valid () : boolean {

        return this.memoized !== undefined;
    }

    /**
     * clear cached value
     */
    clear () {

        this.memoized = undefined;
    }

    get return () : Infer<Container> {

        if(!this.valid) {

            this.memoized = {
                return : <Infer<Container>>this.subject.return
            };
        }

        return (<Returns<Infer<Container>>> this.memoized).return;
    }

}

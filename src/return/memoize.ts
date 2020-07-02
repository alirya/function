import Returns from "./returns";
import Infer from "./infer/returns";

/**
 * Wrap {@link Returns} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<
    Container extends Returns = Returns
> implements
    Readonly<Returns<Infer<Container>>>
{
    protected memoize : Returns<Infer<Container>>|undefined;

    constructor(
        public subject : Container
    ) {
        this.clear();
    }

    get memoized () : boolean {

        return this.memoize !== undefined;
    }

    /**
     * clear cached value
     */
    clear () {

        this.memoize = undefined;
    }

    get return () : Infer<Container> {

        if(!this.memoized) {

            this.memoize = {
                return : <Infer<Container>>this.subject.return
            };
        }

        return (<Returns<Infer<Container>>> this.memoize).return;
    }

}

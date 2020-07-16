import Return from "./return";
import Infer from "./infer/return";

/**
 * Wrap {@link Return} and cache its value
 */
export default class MemoizeFromObject<
    Container extends Return = Return
    > implements
    Readonly<Return<Infer<Container>>>
{
    protected memoize : Return<Infer<Container>>|undefined;

    constructor(
        public subject : Container
    ) {
        this.clear();
    }

    get memoized () : boolean {

        return this.memoize !== undefined;
    }

    /**
     * clear cached return
     */
    clear () {

        this.memoize = undefined;
    }

    get return () : Infer<Container> {

        if(!this.memoized) {

            this.memoize = {
                return : <Infer<Container>> this.subject.return
            };
        }

        return (<Return<Infer<Container>>> this.memoize).return;
    }

}

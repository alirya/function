import Callable from "./callable";
import OmitUndefined from "./omit-undefined";


export default function Default<
    Expectation extends unknown,
    Default extends unknown = unknown>
(defaults : Default
) : Callable<[Expectation], OmitUndefined<Expectation>|Default> {

    return function (data)  {

       if(data !== undefined) {

           return data as OmitUndefined<Expectation>;
       }

       return defaults;

    }
}

import Callable from './callable.js';
import OmitUndefined from './omit-undefined.js';


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

import Callable from '../callable.js';
import Guard from '../boolean/guard.js';
import Assert from '../assert/assert.js';

export default interface Callback<
    FunctionType extends Callable|Guard<any, any, []>|Assert
> {

    callback : FunctionType;
}

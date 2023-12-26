import Callable from '../callable.js';
import Assert from '../assert/assert.js';
import Guard from '@axiona/boolean/function/guard.js';

export default interface Callback<
    FunctionType extends Callable|Guard<any, any, []>|Assert
> {

    callback : FunctionType;
}

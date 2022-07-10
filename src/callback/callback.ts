import Callable from '../callable';
import Assert from '../assert/assert';
import Guard from '@alirya/boolean/function/guard';

export default interface Callback<
    FunctionType extends Callable|Guard<any, any, []>|Assert
> {

    callback : FunctionType;
}

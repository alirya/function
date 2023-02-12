import Argument from './argument.js';
import Callback from '../callback/callback.js';

/**
 * container for function argument & function
 */
export default class Value<
    Return, Arguments extends unknown[]
> implements
    Readonly<Callback<(...args:Arguments)=>Return>>,
    Argument<Arguments>
{
    constructor(
        public argument : Arguments,
        public callback : (...argument : Arguments) => Return
    ) {
    }
}

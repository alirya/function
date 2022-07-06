import Message from '../../boolean/string/function.js';
import CallbackParameters from './callback.js';

export default function Function(value : unknown) : Error {

    return CallbackParameters.Parameters([value], Message.Parameters);
}

import Message from '../../boolean/string/function';
import CallbackParameters from './callback';

export default function Function(value : unknown) : Error {

    return CallbackParameters.Parameters([value], Message.Parameters);
}

import Callable from './callable.js';
import PipeCallback, {PipeCallbackReturn} from './pipe-callback.js';

export default function Pipe<Type>(data : Type) : PipeCallbackReturn<Type> {

    return PipeCallback(()=>data);
}




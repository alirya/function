import Callable from "./callable";
import PipeCallback, {PipeCallbackReturn} from "./pipe-callback";

export default function Pipe<Type>(data : Type) : PipeCallbackReturn<Type> {

    return PipeCallback(()=>data);
}




import Message from "../../boolean/string/function";
import CallbackParameters from "./callback-parameters";

export default function Function(value : unknown) : Error {

    return CallbackParameters([value], Message.Parameters);
}

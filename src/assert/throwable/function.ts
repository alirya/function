import Message from "../../boolean/string/function";
import {CallbackParameter} from "./callback";

export default function Function(value : unknown) : Error {

    return CallbackParameter([value], Message.Parameter);
}

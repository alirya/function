import Message from "../../boolean/string/function";
import Callback from "./callback";

export default function Function(value : unknown) : Error {

    return Callback({
        message: ({argument, valid})=>Message({valid, value:argument[0]}),
        argument:[value]}
    );
}

import Message from "../string/function";

export default function Function(value : unknown) : Error {

    return new Error(Message(value, false))
}

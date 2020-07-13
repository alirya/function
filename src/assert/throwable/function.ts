import Message from "../string/function";

export default function Function(value : any) : Error {

    return new Error(Message(value, false))
}

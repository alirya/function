import Function from "@dikac/t-function/function";

export default function Callback(
    value : unknown,
    message : Function<[boolean, unknown], string>,
    error : Function<[string], Error> = (string : string) => new Error(string),
) : Error {

    return error(message(false, value))
}

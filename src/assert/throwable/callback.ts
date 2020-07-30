import Function from "@dikac/t-function/function";

export default function Callback<Arguments extends unknown[]>(
    argument : Arguments,
    message : (valid:boolean, ...argument:Arguments) => string,
    error : Function<[string], Error> = (string : string) => new Error(string),
) : Error {

    return error(message(false, ...argument));
}

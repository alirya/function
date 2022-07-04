import {O} from "ts-toolbelt";

export default function MethodParameters<
    Object extends Record<PropertyKey, any>,
    Method extends keyof O.Select<Object, Function> = keyof O.Select<Object, Function>
>(
    object : Object,
    key : Method
) : Object[Method] {

    // @ts-ignore
    return (...args)=>object[key](...args)
}

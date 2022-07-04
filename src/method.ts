import {O} from "ts-toolbelt";

export function MethodParameters<
    Object extends Record<PropertyKey, any>,
    Method extends keyof O.Select<Object, Function> = keyof O.Select<Object, Function>
>(
    object : Object,
    key : Method
) : Object[Method] {

    return ((...args)=>object[key](...args)) as Object[Method]
}

export function MethodParameter<
    Object extends Record<PropertyKey, any>,
    Method extends keyof O.Select<Object, Function> = keyof O.Select<Object, Function>
>(  {
        object,
        key,
    } : {
        object : Record<PropertyKey, any>,
        key: keyof O.Select<Object, Function>
    }
) : Object[Method] {

    return MethodParameters(object, key) as Object[Method] ;
}

namespace Method {
    export const Parameters = MethodParameters;
    export const Parameter = MethodParameter;

}
export default Method;

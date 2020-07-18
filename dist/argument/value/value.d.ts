import ArgumentInterface from "../argument";
declare type Value<Type> = Type extends ArgumentInterface<infer As> ? As : never;
export default Value;

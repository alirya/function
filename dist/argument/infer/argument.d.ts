import ArgumentInterface from "../argument";
declare type Argument<Type> = Type extends ArgumentInterface<infer As> ? As : never;
export default Argument;

import ArgumentInterface from "../argument";

type Argument<Type> = Type extends ArgumentInterface<infer As> ? As : never;

export default Argument;

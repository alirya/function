import ArgumentInterface from '../argument.js';

type Value<Type> = Type extends ArgumentInterface<infer As> ? As : never;

export default Value;

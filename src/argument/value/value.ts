import ArgumentInterface from '../argument';

type Value<Type> = Type extends ArgumentInterface<infer As> ? As : never;

export default Value;

import ReturnInterface from "../return";

type Value<Type> = Type extends ReturnInterface<infer As> ? As : never;

export default Value;

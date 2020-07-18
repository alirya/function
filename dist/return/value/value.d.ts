import ReturnInterface from "../return";
declare type Value<Type> = Type extends ReturnInterface<infer As> ? As : never;
export default Value;

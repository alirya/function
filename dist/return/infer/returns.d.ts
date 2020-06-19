import ReturnInterface from "../returns";
declare type Returns<Type> = Type extends ReturnInterface<infer As> ? As : never;
export default Returns;

import ReturnInterface from "../returns";

type Returns<Type> = Type extends ReturnInterface<infer As> ? As : never;

export default Returns;

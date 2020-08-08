import ReturnInterface from "../return";
declare type Infer<Type> = Type extends ReturnInterface<infer As> ? As : never;
export default Infer;

import ReturnInterface from "../return";

type Infer<Type> = Type extends ReturnInterface<infer As> ? As : never;

export default Infer;

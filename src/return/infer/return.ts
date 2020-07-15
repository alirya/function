import ReturnInterface from "../return";

type Return<Type> = Type extends ReturnInterface<infer As> ? As : never;

export default Return;

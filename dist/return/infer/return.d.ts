import ReturnInterface from "../return";
declare type Return<Type> = Type extends ReturnInterface<infer As> ? As : never;
export default Return;

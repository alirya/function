import ReturnInterface from '../return.js';

type Infer<Type> = Type extends ReturnInterface<infer As> ? As : never;

export default Infer;

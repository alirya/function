declare type FunctionSingle<Argument = unknown, Return = unknown, Extras extends unknown[] = unknown[]> = (argument: Argument, ...extras: Extras) => Return;
export default FunctionSingle;

declare type Guard<Value, Return extends Value, Extras extends unknown[] = unknown[]> = (argument: Value, ...extras: Extras) => argument is Return;
export default Guard;

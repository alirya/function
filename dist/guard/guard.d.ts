declare type Guard<Value, Return extends Value, Extras extends any[] = []> = (argument: Value, ...extras: Extras) => argument is Return;
export default Guard;

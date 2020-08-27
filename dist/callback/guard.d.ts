export default interface Guard<Value, Return extends Value, Extras extends unknown[] = unknown[]> {
    callback: (value: Value, ...args: Extras) => value is Return;
}

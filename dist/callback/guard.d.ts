import GuardFunction from "../boolean/guard";
export default interface Guard<Value, Return extends Value, Extras extends unknown[] = unknown[]> {
    callback: GuardFunction<Value, Return, Extras>;
}

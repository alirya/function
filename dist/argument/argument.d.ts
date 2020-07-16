/**
 * Intended to be used for functions arguments
 */
export default interface Argument<Value extends unknown[] = unknown[]> {
    argument: Value;
}

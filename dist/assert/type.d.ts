import Function from "../function";
/**
 * Throw exception from {@param errorFactory} if given {@param value} is no callable type
 */
export default function Type<Assumption extends Function>(value: any, errorFactory?: Function<[any], Error>): asserts value is Assumption;

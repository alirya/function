import Functions from "../function";
/**
 * Throw exception from {@param errorFactory} if given {@param value} is no callable type
 */
export default function Type<Assumption extends Functions>(value: any, errorFactory?: Functions<[any], Error>): asserts value is Assumption;

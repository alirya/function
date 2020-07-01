import Functions from "./functions";
/**
 * return {@param value} if type is function or
 * throw error from {@param error}
 */
export default function Guard<Assumption extends Functions>(value: any, error?: Functions<[any], Error>): Assumption;

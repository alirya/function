import Functions from "./function";
export default function Guard<Assumption extends Functions>(value: any, error?: Functions<[any], Error>): Assumption;

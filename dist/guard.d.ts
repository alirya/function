import Functions from "./functions";
export default function Guard<Assumption extends Functions>(value: any, error?: Functions<[any], Error>): Assumption;

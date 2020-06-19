import Functions from "../function";
export default function Type<Assumption extends Functions>(value: any): value is Assumption;

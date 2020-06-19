import Functions from "../functions";
export default function Type<Assumption extends Functions>(value: any): value is Assumption;

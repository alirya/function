import {Union} from "ts-toolbelt";


type OmitUndefined<Type> = Union.Exclude<Type, undefined>;

export default OmitUndefined;
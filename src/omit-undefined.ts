import {Union} from "ts-toolbelt";


type OmitUndefined<Type> = Union.Exclude<Type, undefined>;

/**
 * @deprecated
 */
export default OmitUndefined;
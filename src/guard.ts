import Functions from "./function";
import Type from "./assert/type";
import ThrowableType from "./throwable/type";

export default function Guard<
    Assumption extends Functions
>(
    value : any,
    error : Functions<[any], Error> = ThrowableType
) : Assumption {

    Type<Assumption>(value, error);

    return value;
}

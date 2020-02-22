import IsFunction from "is-function"

export default function Type(value : any) : value is () => any {

    return IsFunction(value);
}

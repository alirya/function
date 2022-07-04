import Callable from "./callable";

export default function Constant<Type>(value:Type) : Callable<[], Type> {

    return ()=>value;
}
import Callable from './callable.js';

export default function Constant<Type>(value:Type) : Callable<[], Type> {

    return ()=>value;
}
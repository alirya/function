import Callable from './callable.js';

export default function Constant<Type>(value:Type) : Callable<[], Type> {

    return ()=>value;
}

export {Constant as CallbackConstant}
export {Constant as CallableConstant}
import Argument from "../argument";
import Callback from "../../callback/callback";
import Callable from "../../callable";
export default function CallParameter<FunctionType extends Callable>({ callback, argument }: Argument<Parameters<FunctionType>> & Callback<FunctionType>): ReturnType<FunctionType>;

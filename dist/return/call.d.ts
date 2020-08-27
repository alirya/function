import ArgumentInterface from "../argument/argument";
import ReturnInterface from "./return";
import Callback from "../callback/callback";
import Callable from "../callable";
/**
 * Use {@link ArgumentInterface} as argument to call function form {@link Callback}
 * and set return value to {@link Return}
 */
export default function Call<FunctionT extends Callable>(object: ArgumentInterface<Parameters<FunctionT>> & Callback<FunctionT> & ReturnInterface<ReturnType<FunctionT>>): ArgumentInterface<Parameters<FunctionT>> & Callback<FunctionT> & ReturnInterface<ReturnType<FunctionT>>;

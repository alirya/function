import Equal from "@dikac/t-array/boolean/equal";
import DynamicMemoizeContainer from "./object/dynamic-memoize-container";
import Callable from "./callable";

export default function DynamicMemoize<
    FunctionT extends Callable,
>(
    callable : FunctionT,
    compareArguments : (argument : Parameters<FunctionT>, list : Parameters<FunctionT>) => boolean= Equal
) : FunctionT & {container:DynamicMemoizeContainer<FunctionT>} {

    let container = new DynamicMemoizeContainer<FunctionT>(callable, compareArguments);

    let merged : {container:DynamicMemoizeContainer<FunctionT>} & FunctionT ;

    let fn : FunctionT = <FunctionT> function (... argument : Parameters<FunctionT>) : ReturnType<FunctionT> {

        let object = container.get(argument);

        if(!object) {

            object = container.call(argument);

            container.memoized.push(object);
        }

        return object.return;
    };

    merged = <{container:DynamicMemoizeContainer<FunctionT>} & FunctionT>fn;
    merged.container = container;
    return  merged;

}


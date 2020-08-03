import Equal from "@dikac/t-array/boolean/equal";
import Function from "./function";
import DynamicMemoizeContainer from "./object/dynamic-memoize-container";


export default function DynamicMemoize<
    FunctionT extends Function,
>(
    callable : FunctionT,
    compareArguments : Function<[Parameters<FunctionT>, Parameters<FunctionT>], boolean> = Equal
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


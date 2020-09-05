import Equal from "@dikac/t-array/boolean/equal";
import DynamicMemoizeContainer from "./object/dynamic-memoize-container";
import Callable from "./callable";

export default function DynamicMemoize<
    FunctionType extends Callable,
>(
    callable : FunctionType,
    compareArguments : (argument : Parameters<FunctionType>, list : Parameters<FunctionType>) => boolean= Equal
) : FunctionType & {container:DynamicMemoizeContainer<FunctionType>} {

    let container = new DynamicMemoizeContainer<FunctionType>(callable, compareArguments);

    let merged : {container:DynamicMemoizeContainer<FunctionType>} & FunctionType ;

    let fn : FunctionType = <FunctionType> function (... argument : Parameters<FunctionType>) : ReturnType<FunctionType> {

        let object = container.get(argument);

        if(!object) {

            object = container.call(argument);

            container.memoized.push(object);
        }

        return object.return;
    };

    merged = <{container:DynamicMemoizeContainer<FunctionType>} & FunctionType>fn;
    merged.container = container;
    return  merged;

}


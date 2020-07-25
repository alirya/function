import Equal from "@dikac/t-array/boolean/equal";
import Functions from "./function";
import DynamicMemoizeContainer from "./object/dynamic-memoize-container";


export default function DynamicMemoize<
    Fn extends Functions,
>(
    callable : Fn,
    compareArguments : Functions<[Parameters<Fn>, Parameters<Fn>], boolean> = Equal
) : Fn & {container:DynamicMemoizeContainer<Fn>} {

    let container = new DynamicMemoizeContainer<Fn>(callable, compareArguments);

    let merged : {container:DynamicMemoizeContainer<Fn>} & Fn ;


    let fn : Fn = <Fn> function (... argument : Parameters<Fn>) : ReturnType<Fn> {

        let object = container.get(argument);

        if(!object) {

            object = container.call(argument);

            container.memoized.push(object);

        }

        return object.return;
    };

    merged = <{container:DynamicMemoizeContainer<Fn>} & Fn>fn;
    merged.container = container;
    return  merged;

}


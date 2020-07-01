import Equal from "@dikac/t-array/boolean/equal";
import Functions from "./functions";
import {DynamicMemoizeContainer} from "./object/dynamic-memoize-container";
import Merge from "@dikac/t-object/merge";

export default function DynamicMemoize<
    Fn extends Functions,
>(
    callable : Fn,
    compareArguments : Functions<[Parameters<Fn>, Parameters<Fn>], boolean> = Equal
) : Fn & DynamicMemoizeContainer<Fn> {

    let container = new DynamicMemoizeContainer<Fn>(callable, compareArguments);

    let merged : DynamicMemoizeContainer<Fn> & Fn ;

    let fn : Fn = <Fn> function (... argument : Parameters<Fn>) : ReturnType<Fn> {

        let object = merged.get(argument);

        if(!object) {

            object = merged.call(argument);

            merged.memoized.push(object);

        }


        return object.return;
    };

    merged = <DynamicMemoizeContainer<Fn> & Fn> Merge(fn, container);

    return merged;
}


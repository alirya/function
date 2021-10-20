import Equal from "@dikac/t-array/boolean/equal";
import DynamicMemoizeContainer from "./object/dynamic-memoize-container";
import Callable from "./callable";
import Callback from "./callback/callback";
import Validation from "@dikac/t-boolean/validation/validation";

export default function DynamicMemoize<FunctionType extends Callable>({
      callback,
      validation,
      container
  } : Callback<FunctionType> &
    Partial<Validation<[Parameters<FunctionType>, Parameters<FunctionType>]>> &
    {container?:false}
) : FunctionType

export default function DynamicMemoize<FunctionType extends Callable>({
      callback,
      validation,
      container
  } : Callback<FunctionType> &
    Partial<Validation<[Parameters<FunctionType>, Parameters<FunctionType>]>> &
    {container:true}
) : [FunctionType, DynamicMemoizeContainer<FunctionType>]

export default function DynamicMemoize<FunctionType extends Callable>({
    callback,
    validation = Equal,
    container = false
} : Callback<FunctionType> &
    Partial<Validation<[Parameters<FunctionType>, Parameters<FunctionType>]>> &
    {container?:boolean}
) : FunctionType|[FunctionType, DynamicMemoizeContainer<FunctionType>] {

    const memoizeContainer = new DynamicMemoizeContainer<FunctionType>(callback, validation);

    const callable : FunctionType = <FunctionType> function (... argument : Parameters<FunctionType>) : ReturnType<FunctionType> {

        return memoizeContainer.memoize(argument).return;
    };

    return container ? [callable, memoizeContainer] : callable;

}


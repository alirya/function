import Callable from "./callable";


export interface PipeCallbackReturn<Argument = undefined> {
    <Callback extends Callable<[Argument]>>(callback : Callback) : PipeCallbackReturn<ReturnType<Callback>>
    readonly returns ?: Argument;
}


export default function PipeCallback<
    Callback extends Callable & Pick<PipeCallbackReturn, 'returns'>
>(
    callback : Callback
) : PipeCallbackReturn<ReturnType<Callback>> {

    const returns : ReturnType<Callback> = callback(callback.returns) as ReturnType<Callback>;

    const recursive = (call) => PipeCallback(Object.assign(call, {returns}));

    return Object.assign(recursive, {returns});
}



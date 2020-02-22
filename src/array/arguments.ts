export default function Arguments(argument : IArguments) : number[] {

    let array : number[] = [];

    for(let i = 0; i < argument.length; i++) {

        array.push(argument[i]);
    }

    return array;

}

export default function Function(value : unknown, valid : boolean) : string {

    let string = (<any>value).toString();

    if(valid) {

        return `value "${string}" is function`;

    } else {

        return `value "${string}" is not function`;
    }
}

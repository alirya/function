export default function Function(
    valid : boolean,
    value : unknown,
) : string {

    if(valid) {

        return `value is function`;

    } else {

        return `value is not function`;
    }
}

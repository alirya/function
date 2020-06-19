export default function Type(value: string) : Error {

    return new Error(`type expect function, given ${value}`)
}

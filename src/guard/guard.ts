
type Guard<Argument, Return extends Argument, Extras extends any[] = []> = (argument : Argument, ...extras : Extras) => argument is Return
export default Guard;

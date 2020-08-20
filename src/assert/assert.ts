
type Assert<Argument, Return extends Argument, Extras extends unknown[] = unknown[]> = (argument : Argument, ...extras : Extras) => asserts argument is Return
export default Assert;

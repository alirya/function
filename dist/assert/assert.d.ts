declare type Assert<Argument, Return extends Argument, Extras extends any[]> = (argument: Argument, ...extras: Extras) => asserts argument is Return;
export default Assert;

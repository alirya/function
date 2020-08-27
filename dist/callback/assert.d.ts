export default interface Assert<Argument, Return extends Argument, Extras extends unknown[] = unknown[], Assert extends (argument: Argument, ...args: Extras) => asserts argument is Return = (argument: Argument, ...args: Extras) => asserts argument is Return> {
    callback: Assert;
}

declare type Ensure<Argument, Return extends Argument, Extras extends unknown[]> = (argument: Argument, ...extras: Extras) => Return;
export default Ensure;

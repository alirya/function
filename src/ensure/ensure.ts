
type Ensure<Argument, Return extends Argument, Extras extends any[]> = (argument : Argument, ...extras : Extras) => Return
export default Ensure;

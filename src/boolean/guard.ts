
type Guard<Argument, ValidType extends Argument, Arguments extends unknown[] = []> = (value : Argument, ...args : Arguments[]) => value is ValidType;

export default Guard;

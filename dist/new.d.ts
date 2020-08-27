/**
 * transform class constructor to function
 * '
 * @param constructor
  */
export default function New<Class, Argument extends unknown[] = unknown[]>(constructor: {
    new (...argument: Argument): Class;
}): (...args: Argument) => Class;

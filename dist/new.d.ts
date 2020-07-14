import Function from './function';
export default function New<Argument extends unknown[], Class>(constructor: {
    new (...argument: Argument): Class;
}): Function<Argument, Class>;

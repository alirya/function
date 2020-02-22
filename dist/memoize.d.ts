export default function Memoize<Fn extends (...argument: Arg) => Return, Arg extends any[], Return>(callable: Fn, ...argument: Arg): () => Return;

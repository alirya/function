declare type Callable<Arguments extends unknown[] = unknown[], Return = unknown> = (...args: Arguments) => Return;
export default Callable;

declare type Guard = (value: unknown, ...args: unknown[]) => value is unknown;
export default Guard;

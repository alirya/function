export default function Callback<Arguments extends unknown[], ErrorType extends Error>(argument: Arguments, message: (valid: boolean, ...argument: Arguments) => string, error: (message: string) => ErrorType): ErrorType;
export default function Callback<Arguments extends unknown[]>(argument: Arguments, message: (valid: boolean, ...argument: Arguments) => string): Error;

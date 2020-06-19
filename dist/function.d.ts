/**
 * suffix 's' is used since "Function" keyword is reserved
 */
declare type Functions<Arguments extends any[] = any[], Return = any> = (...argument: Arguments) => Return;
export default Functions;

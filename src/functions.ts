/**
 * suffix 's' is used since "Function" keyword is reserved
 */
type Functions<Arguments extends any[] = any[], Return = any> = (... argument : Arguments) => Return

export default Functions;

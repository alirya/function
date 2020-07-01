import Functions from "../functions";
/**
 * return {@param value} if type is valid according to {@param validation} or
 * throw error from {@param error}
 */
export default function Guard<Type>(value: any, validation: Functions<[any], Type>, error: Functions<[any], Error>): Type;

import ArgumentType from "../../argument/argument";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
declare type Argument<Arguments extends unknown[], ErrorType extends Error> = ArgumentType<Arguments> & Message<(a: Validatable & ArgumentType<Arguments>) => string> & {
    error?: (message: string) => ErrorType;
};
export default function Callback<Arguments extends unknown[], ErrorType extends Error>({ argument, message, error }: Argument<Arguments, Error>): ErrorType;
export default function Callback<Arguments extends unknown[]>({ argument, message, }: Argument<Arguments, Error>): Error;
export {};

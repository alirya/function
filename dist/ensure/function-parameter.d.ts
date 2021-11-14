import Value from "@dikac/t-value/value";
/**
 * object destructure version
 *
 * @param value
 * @param error
 */
export default function FunctionParameter({ value, error }: Value<unknown> & {
    error?: (value: unknown) => Error;
}): import("../callable").default<unknown[], unknown>;

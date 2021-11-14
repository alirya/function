import CallbackParameters from "./callback-parameters";
/**
 * object destructure version
 *
 * @param value
 * @param validation
 * @param error
 * @param argument
 */
export default function CallbackParameter({ value, validation, error, argument }) {
    return CallbackParameters(value, validation, error, ...argument);
}
//# sourceMappingURL=callback-parameter.js.map
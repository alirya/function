import FunctionParameters from "./function-parameters";
import FunctionParameter from "./function-parameter";
declare namespace Function {
    const Parameters: typeof FunctionParameters;
    const Parameter: typeof FunctionParameter;
}
export default Function;

/**
 * transform class constructor to function
 *
 * @param constructor
 */
export default function New(constructor) {
    return function (...argument) {
        return new constructor(...argument);
    };
}
//# sourceMappingURL=new.js.map
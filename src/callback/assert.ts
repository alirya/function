import AssertFunction from "../assert/assert";

export default interface Assert<
    Argument,
    Return extends Argument,
    Extras extends unknown[] = unknown[],
    Assert extends AssertFunction<Argument, Return, Extras> = AssertFunction<Argument, Return, Extras>
> {

    callback : Assert
}

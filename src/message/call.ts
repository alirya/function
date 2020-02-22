import Message from "@dikac/t-message/message";
import Argument from "../argument/argument";

export default class Call<
    Fn extends (...argument : Arg) => M,
    Arg extends any[],
    M
> implements Readonly<Message<M>>, Argument<Arg> {

    constructor(
        readonly messageFactory : (... argmunet : Arg) =>  M,
        public argument : Arg
    ) {

    }

    get message() : M {

        return this.messageFactory(...this.argument);
    }
}

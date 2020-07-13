import Call from "../../../dist/argument/any/call";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("basic", function() {

    let object = {
        argument : [1],
        value : (number : number) => {
            return number + number;
        },
        return : 0
    };


    it("call", () => {

        let returns = Call(object);

        expect(returns).toBe(2)
        expect(object.return).toBe(0)
    });

});

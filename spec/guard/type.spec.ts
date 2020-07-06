import Type from "../../dist/guard/type";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("valid", function() {

    it("native", () => expect(Type(setTimeout)).toBe(true));
    it("anonymous", () => expect(Type(function () {})).toBe(true));
    it("callback", () => expect(Type( ()=>{})).toBe(true));
    it("native class", () => expect(Type( String)).toBe(true));
    it("class", () => expect(Type(class {})).toBe(true));
});

describe("invalid", function() {


    it("object", () => expect(Type({ data : true})).toBe(false));
    it("number", () => expect(Type(1)).toBe(false));
    it("string", () => expect(Type('a')).toBe(false));
});

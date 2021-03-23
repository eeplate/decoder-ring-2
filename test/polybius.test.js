const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe ("polybius", () => {
    it ("Should translate the letters i and j to 42.", () =>{
        const input = "fuji";
        const expected = "12544242";
        const actual = polybius(input, encode = true);
        expect(actual).to.eql(expected);
    });
    it ("Should translate 42 to i/j when decoding.", () =>{
        const input = "12422451";
        const expected = "f(i/j)re";
        const actual = polybius(input, encode = false);
        expect(actual).to.eql(expected);
    });
    it ("Should not be case sensitive.", () =>{
        const input = "Cleoxenus";
        const expected = "311351433551335434";
        const actual = polybius(input, encode = true);
        expect(actual).to.eql(expected);
    });
    it ("Should maintain spaces in the message before and after encoding or decoding.", () =>{
        const input = "play fair";
        const expected = "53131145 12114224";
        const actual = polybius(input, encode = true);
        expect(actual).to.eql(expected);
    });
});
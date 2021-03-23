const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe ("caesar", () => {
    it ("Should return false if the shift value is equal to 0.", () => {
        const shift = 0;
        const input = "thinkful a-z";
        const expected = false;
        const actual = caesar(input, shift, encode = true);
        expect(actual).to.eql(expected);
    });
    it ("Should return false if the shift value is less than -25.", () => {
        const shift = -27;
        const input = "thinkful a-z";
        const expected = false;
        const actual = caesar(input, shift, encode = true);
        expect(actual).to.eql(expected);
    });
    it ("Should return false if the shift value is greater than 25.", () => {
        const shift = 77;
        const input = "thinkful a-z";
        const expected = false;
        const actual = caesar(input, shift, encode = true);
        expect(actual).to.eql(expected);
    });
    it ("Should return false if the shift value is not present.", () => {
        const shift = null;
        const input = "thinkful a-z";
        const expected = false;
        const actual = caesar(input, shift, encode = true);
        expect(actual).to.eql(expected);
    });
    it ("Should not be case sensitive.", () => {
        const shift = 3; //only testing for case sensitivity, not using a shift that would wrap;
        const input = "Thinkful";
        const expected = "wklqnixo";
        const actual = caesar(input, shift, encode = true);
        expect(actual).to.eql(expected);
    });
    it ("When encoding, should handle shifts that go past the end of the alphabet.", () => {
        const shift = 23;
        const input = "azalea"; // only testing for wrapping, not case or special characters;
        const expected = "xwxibx";
        const actual = caesar(input, shift, encode = true);
        expect(actual).to.eql(expected);
    });
    it ("When encoding, should handle shifts that go past the beginning of the alphabet.", () => {
        const shift = -23;
        const input = "azalea";
        const expected = "dcdohd";
        const actual = caesar(input, shift, encode = true);
        expect(actual).to.eql(expected);
    });
    it ("Should maintain spaces, and other nonalphabetic symbols in the message, before and after encoding or decoding", () => {
        const shift = 3; // just testing for symbols, not wrapping or case
        const input = "smile :)";
        const expected = "vploh :)";
        const actual = caesar(input, shift, encode = true);
        expect(actual).to.eql(expected);
    });
    it ("Should be able to decode.", () => {
        const encode = false;
        const shift = 11;
        const input = "opnzop";
        const expected = "decode";
        const actual = caesar(input, shift, encode);
        expect(actual).to.eql(expected);
    });
});
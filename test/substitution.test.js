const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe ("substitution", () => {
    it ("Should return false if the given alphabet isn't exactly 26 characters long when encoding.", () =>{
        const input = "keyword";
        const alphabet = "keywordabcfghijlmnpqstuvx";
        const expected = false;
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected);
    });
    it ("Should return false if the given alphabet isn't exactly 26 characters long, when decoding.", () =>{
        const input = "foxujnw";
        const alphabet = "keywordabcfghijlmnpqstuvx";
        const expected = false;
        const actual = substitution(input, alphabet, encode = false);
        expect(actual).to.eql(expected);
    });
    it ("Should correctly translate the given phrase, based on the alphabet given to the function, when encoding.", () =>{
        const input = "enigma";
        const alphabet = "keywordabcfghijlmnpqstuvxz";
        const expected = "oibdhk";
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected);
    });
    it ("Should correctly translate the given phrase, based on the alphabet given to the function, when decoding.", () =>{
        const input = "oibdhk";
        const alphabet = "keywordabcfghijlmnpqstuvxz";
        const expected = "enigma";
        const actual = substitution(input, alphabet, encode = false);
        expect(actual).to.eql(expected);
    });
    it ("Should return false if there are any duplicate characters in the given alphabet when encoding.", () =>{
        const input = "nomenclator";
        const alphabet = "keywordabcfghijlmnpqstuvxzz";
        const expected = false;
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected);
    });
    it ("Should return false if there are any duplicate characters in the given alphabet when decoding.", () =>{
        const input = "ijhoiygkqjn";
        const alphabet = "keywordabcfghijlmnpqstuvxzz";
        const expected = false;
        const actual = substitution(input, alphabet, encode = false);
        expect(actual).to.eql(expected);
    });
    it ("Should maintain spaces in the message, before and after encoding.", () =>{
        const input = "bletchley park";
        const alphabet = "keywordabcfghijlmnpqstuvxz";
        const expected = "egoqyagox lknf";
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected);
    });
    it ("Should maintain spaces in the message, before and after decoding.", () =>{
        const input = "egoqyagox lknf";
        const alphabet = "keywordabcfghijlmnpqstuvxz";
        const expected = "bletchley park";
        const actual = substitution(input, alphabet, encode = false);
        expect(actual).to.eql(expected);
    });
    it ("Should ignore capital letters when encoding.", () =>{
        const input = "Atbash";
        const alphabet = "keywordabcfghijlmnpqstuvxz";
        const expected = "kqekpa";
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected);
    });
    it ("Should ignore capital letters when decoding.", () =>{
        const input = "Kqekpa";
        const alphabet = "keywordabcfghijlmnpqstuvxz";
        const expected = "atbash";
        const actual = substitution(input, alphabet, encode = false);
        expect(actual).to.eql(expected);
    });
});
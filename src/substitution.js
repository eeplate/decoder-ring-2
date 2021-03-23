// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  
  function substitution(input, alphabet, encode = true) {
    if (alphabet === undefined || alphabet.length == 0) {
      return false;
    };

    let inputs = input.toLowerCase().split("");

    let alphabetical = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "x"];

    let alphabetSub = alphabet.split("");

    let jessica = alphabetSub.slice().sort();
     let results = [];
    for (let i = 0; i < jessica.length - 1; i++) {
     if (jessica[i + 1] == jessica[i]) {
      return false;
    }
  }

    

    if (alphabetSub.length !== 26) {
      return false;
    }
    // console.log(encoder(input, alphabet, encode = true, inputs, alphabetical, alphabetSub))
    if (encode){
      return encoder(input, alphabet, encode = true, inputs, alphabetical, alphabetSub);
    };

    if (!encode){
      return decoder(input, alphabet, encode = false, inputs, alphabetical, alphabetSub);
    };
  
    
    
     
  };

  function encoder(input, alphabet, encode = true, inputs, alphabetical, alphabetSub){
      let result1 = inputs.map((input) => {
        if (input === " ") {
          return input;
        }
      let subresult = alphabetical.map((letter) => {
        if (input === letter) {
          
          return alphabetSub[alphabetical.indexOf(letter)];
        }
        
      }).join('');
     
      return subresult;
    
    })
    return result1.join('');
  };

  function decoder(input, alphabet, encode = false, inputs, alphabetical, alphabetSub){
      let result1 = inputs.map((input) => {
          if (input === " ") {
          return input;
        }
      let subresult = alphabetSub.map((letter) => {
        if (input === letter) {
          
          return alphabetical[alphabetSub.indexOf(letter)];
        }
       
      }).join('');
     
      return subresult;
    
    })
    return result1.join('');
  }
  

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function caesar(input, shift, encode = true) {
    let inputs = input.toLowerCase();
    let result = [];
    let inputLetters = [];
    
    if (shift === 0 || shift < -25 || shift > 25 || shift === null) {
      return false; // handles if shift is within the parameters
    }else if(encode === true && shift < 0){
      shiftLeft(inputs, shift, inputLetters, alphabet, result); //handles negative shift on encode
    }else if(encode === true && shift > 0){
      shiftRight(inputs, shift, inputLetters, alphabet, result); // handles positive shift on encode
    }
    else if(encode === false && shift < 0){
      shiftRight(inputs, Math.abs(shift), inputLetters, alphabet, result); // handles negative shift on decode
    }
    else if (encode === false && shift > 0){
      shiftLeft(inputs, -Math.abs(shift), inputLetters, alphabet, result); //handles positive shift on decode
    }
    return result.join("");
  }
  
  
  function shiftLeft(inputs, shift, inputLetters, alphabet, result){
   
    for (let i=0; i<inputs.length; i++){
      inputLetters.push(inputs[i]);
    }
  
    for (let i=0; i<inputLetters.length; i++){
      if (!alphabet.includes(inputLetters[i])){
        result.push(inputLetters[i]);
      }
      for (let j=0; j<alphabet.length; j++){
        if (inputLetters[i] === alphabet[j]) {
          if ((alphabet.indexOf(alphabet[j]) + shift) < 0){
            dif = (alphabet.indexOf(alphabet[j]) + shift);
            result.push(alphabet[alphabet.length + dif]);
          }else{
            result.push(alphabet[j+shift]);
          }
        }
      }
    } 
    return result;
  }
  
  function shiftRight(inputs, shift, inputLetters, alphabet, result){
    
    for (let i=0; i<inputs.length; i++){
      inputLetters.push(inputs[i]);
    }
  
    for (let i=0; i<inputLetters.length; i++){
      if (!alphabet.includes(inputLetters[i])){
        result.push(inputLetters[i]);
      }
      for (let j=0; j<alphabet.length; j++){
        if (inputLetters[i] === alphabet[j]) {
          if ((alphabet.indexOf(alphabet[j]) + shift) >= alphabet.length){
            dif = (alphabet.length - alphabet.indexOf(alphabet[j]));
            
            result.push(alphabet[0 + shift - dif]);
          }else{
            result.push(alphabet[j+shift]);
          }
        }
      }
    }
    return result;  
  }
  
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;

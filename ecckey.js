var ecc  = require("eccjs");
var sjcl = require("eccjs").sjcl;

function generate(bits, pass) {
  if (bits!=192 && bits!=224 && bits!=256 && bits!=384){
    bits = 384;
  }
  
  var keys = ecc.generate(ecc.ENC_DEC, bits);

  keys.enc = sjcl.encrypt(pass, keys.enc);
  keys.dec = sjcl.encrypt(pass, keys.dec);

  return keys;
}

function encrypt(pass, keys, plaintext) {
  keysEnc = sjcl.decrypt(pass, keys.enc);

  return ecc.encrypt(keysEnc, plaintext);
}

function decrypt(pass, keys, cipher) {
  keysDec = sjcl.decrypt(pass, keys.dec);

  return ecc.decrypt(keysDec, cipher);
}

module.exports = {
  generate: generate,
  encrypt: encrypt,
  decrypt: decrypt,
}

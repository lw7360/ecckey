var Chance = require('chance');
var chance = new Chance();
var expect = require('chai').expect;
var ecckey = require('../index');

describe('#ecckey', function() {
  it('should encrypt and decrypt', function() {
    var pass = 'super secure and secret passphrase';
    var keys = ecckey.generate(384, pass);
    var text = 'interesting text';
    var encrypted = ecckey.encrypt(pass, keys, text);
    var decrypted = ecckey.decrypt(pass, keys, encrypted);

    expect(decrypted).to.equal(text);
  });

  it('should encrypt and decrypt random text', function() {
    var pass = chance.string();
    var keys = ecckey.generate(384, pass);
    var text = chance.paragraph();
    var encrypted = ecckey.encrypt(pass, keys, text);
    var decrypted = ecckey.decrypt(pass, keys, encrypted);

    expect(decrypted).to.equal(text);
  });

  it('should encrypt and decrypt random text with a strange # of bits', function() {
    var pass = chance.string();
    var keys = ecckey.generate(1337, pass);
    var text = chance.paragraph();
    var encrypted = ecckey.encrypt(pass, keys, text);
    var decrypted = ecckey.decrypt(pass, keys, encrypted);

    expect(decrypted).to.equal(text);
  });
});

[![Build Status](https://travis-ci.org/lw7360/ecckey.svg)](https://travis-ci.org/lw7360/ecckey)
[![Coverage Status](https://coveralls.io/repos/lw7360/ecckey/badge.svg?branch=master&service=github)](https://coveralls.io/github/lw7360/ecckey?branch=master)

# ecckey

A wrapper around [SJCL's](https://github.com/bitwiseshiftleft/sjcl) ECC Implementation, that lets you password protect your ecc keys. Includes SJCL as `ecckey.sjcl`.

## Installation

> npm install ecckey

## Quick Usage
```js
var ecckey = require("ecckey");

var plaintext = "hello world";
var password = "super secret secure password";

// Generating keys
var keys = ecckey.generate(384, password);

// Encrypting text
var cipher = ecckey.encrypt(password, keys, plaintext);

// Decrypting cipher
var decrypted = ecckey.decrypt(password, keys, cipher);

console.log(decrypted) // => "hello world"
```
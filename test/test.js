var test = require('tap').test;
var baseConvert = require("../");

test("Let's make sure the baseconvert module is working fine.", function(t) {
  // - Testing how the hexa converter behaves with small, big, and giant numbers.
  t.equal(baseConvert.dec2hex(15), 'f', 'dec2hex(15) should be equal to f.');
  t.equal(baseConvert.dec2hex(16777215), 'ffffff', 'dec2hex(16777215) should be equal to ffffff.');
  t.equal(baseConvert.dec2hex(9223372036854775807), '8000000000000000', 'dec2hex(9223372036854775807) should be equal to 8000000000000000.');

  // - Same process, the other way round.
  t.equal(baseConvert.hex2dec('f'), '15', 'hex2dec("f") should be equal to 15');
  t.equal(baseConvert.hex2dec('ffffff'), '16777215', 'hex2dec("ffffff") should be equal to 16777215');
  t.equal(baseConvert.hex2dec('ABC'), '2748', 'hex2dec("ABC") should be equal to 2748');

  // - Let's test the binary <> decimal converter
  t.equal(baseConvert.bin2dec('111'), '7', 'bin2dec("111") should be equal to 7');
  t.equal(baseConvert.dec2bin('7'), '111', 'dec2bin("7") should be equal to 111');

  // - Now comes the hexadecimal <> binary tests
  t.equal(baseConvert.hex2bin('f'), '1111', 'hex2bin("f") should be equal to 1111');
  t.equal(baseConvert.bin2hex('1111'), 'f', 'bin2hex("1111") should be equal to f');

  // - Finally, we can convert any base to any other base
  t.equal(baseConvert.converter(255).fromBase(10).toBase(16), 'ff', 'Custom based queries are not working.');

  t.end();
});

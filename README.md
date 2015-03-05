# baseconvert

This module is based on this [Gist](https://gist.github.com/faisalman/4213592) by faisalman. 

## Installation

Install via npm

	npm install baseconvert --save
	
Require in your application
	
	var baseConvert = require('baseconvert');
	
## Usage

```javascript
var baseConvert = require('baseconvert');
	
var myDecimalNumber = baseConvert.hex2dec('ff'); 
	console.log(myDecimalNumber); // echoes 255
```
	
## References

The following methods are available:

- `bin2hex` converts a binary into an hexadecimal
- `hex2bin` converts an hexadecimal into a binary
- `bin2dec` converts a binary into a decimal
- `dec2bin` converts a decimal into a binary
- `hex2dec` converts an hexadecimal into a decimal
- `dec2hex` converts a decimal into an hexadecimal

You can also play with any other needed bases:

```javascript
var myNumber = baseConvert.converter(1234).fromBase(10).toBase(8);
```
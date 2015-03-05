var BaseConvert = {

  converter: function(number) {
    this.fromBase = function(baseFrom) {
      this.toBase = function(baseTo) {
        return parseInt(number, baseFrom).toString(baseTo);
      };
      return this;
    };
    return this;
  },

  dec2hex: function(number) {
    return this.converter(number).fromBase(10).toBase(16);
  },

  hex2dec: function(number) {
    return this.converter(number).fromBase(16).toBase(10);
  },

  bin2dec: function(number) {
    return this.converter(number).fromBase(2).toBase(10);
  },

  dec2bin: function(number) {
    return this.converter(number).fromBase(10).toBase(2);
  },

  bin2hex: function(number) {
    return this.converter(number).fromBase(2).toBase(16);
  },

  hex2bin: function(number) {
    return this.converter(number).fromBase(16).toBase(2);
  }
};

module.exports = BaseConvert;

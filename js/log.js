const { colorType } = require("./enums");
const { reset, fgCodes, bgCodes, effectCodes } = require("./unicodes");

const log = {
  value(v) {
    this.end();
    this._value = v;
    return this;
  },
  effect(code) {
    if (code !== undefined) this._value = this.setEffect(code) + this._value;
    return this;
  },
  color(ctype, colorCode1, colorCode2) {
    let unicode = "";
    switch (ctype) {
      case colorType.fg:
        unicode = this.forground(colorCode1);
        break;

      case colorType.bg:
        unicode = this.background(colorCode1);
        break;

      case colorType.fb:
        unicode = this.forground(colorCode1);
        unicode += this.background(colorCode2);
        break;
    }
    this._value = unicode + this._value;
    return this;
  },
  forground(code) {
    return fgCodes[code];
  },
  background(code) {
    return bgCodes[code];
  },
  setEffect(code) {
    return effectCodes[code];
  },
  end() {
    this.stack = this.stack || [];
    if (this._value) {
      this.stack.push((this._value += reset));
      this._value = "";
    }
  },
  return() {
    this.end();
    this._value = "";
    const value = this.stack.join("");
    this.stack.length = 0;
    return value;
  }
};

module.exports = log

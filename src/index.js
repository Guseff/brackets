module.exports = function check(str, bracketsConfig) {
  const specials = '[]{}\^$.|?*+()';
  const brackets = bracketsConfig.map(curr => {
    if (specials.includes(curr[0])) {
      return '\\' + curr[0] + '\\' + curr[1];
    } else {
      return curr[0] + curr[1];
    }
  }).join('|');
  const reg = new RegExp(brackets);
  let string = str;

  while (true) {
    if (reg.test(string)) {
      string = string.replace(reg, '');
      continue;
    }
    break;
  }

  return string.length === 0 ? true : false;
}

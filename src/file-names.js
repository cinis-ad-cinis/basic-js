const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const renamed = [];

  names.forEach((el) => {
    let count = 1;
    
    if (renamed.includes(el)) {
      while (renamed.includes(`${el}(${count})`)) {
        count++;
      };
      renamed.push(`${el}(${count})`);
    } else {
      renamed.push(el);
    }
  })
  return renamed;
}

module.exports = {
  renameFiles
};

const fs = require('fs');
const path = require('path');
const { fileFormats } = require('./fileFormats');

const { readdirSync } = fs;

function getFilesListArray(location) {
  const files = [];
  const directory = readdirSync(location);
  directory.forEach((file) => {
    const fileExt = path.extname(file);
    if (fileExt != '') {
      files.push(file);
    }
  });

  return files;
}

function replaceExtensionToMp3(file) {
  const fileDir = path.dirname(file);
  const replacedExt = path.basename(file, path.extname(file)) + '.mp3';
  return path.join(fileDir, replacedExt);
}

function filterFiles(filesArray) {
  if (!filesArray) {
    return [];
  }

  return filesArray.filter((file) => {
    const fileExt = path.extname(file);
    return fileFormats.includes(fileExt);
  });
}

module.exports = {
  getFilesListArray,
  replaceExtensionToMp3,
  filterFiles
};

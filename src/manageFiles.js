const fs = require('fs');
const path = require('path');

const {readdirSync} = fs;

function getFilesListArray(location){
  const files = []
  readdirSync(location).forEach(file => {
    const fileExt = path.extname(file);
    if(fileExt != ''){
      files.push(file);
    }
  });

  return files;
}

function replaceExtensionToMp3(file){
  const fileDir = path.dirname(file)
  const replacedExt = path.basename(file, path.extname(file)) + '.mp3'
  return path.join(fileDir, replacedExt)
}

module.exports = {
  getFilesListArray,
  replaceExtensionToMp3
}
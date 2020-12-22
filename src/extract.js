const {getAudio} = require('./exportAudio');
const {getFilesListArray, replaceExtensionToMp3} = require('./manageFiles');

const [inputArg, outputArg] = process.argv.slice(2);

const INPUT_DIR = './input'
const OUTPUT_DIR = './output'

const inputPath = inputArg || INPUT_DIR
const outputPath = outputArg || OUTPUT_DIR

const filesList = getFilesListArray(inputPath);

const amountOfFiles = filesList.length;

async function extract(){
  if(amountOfFiles){
    for(let i = 0; i < amountOfFiles; i++){
      const inputFile = `${inputPath}/${filesList[i]}`
      const outputFileName = replaceExtensionToMp3(filesList[i])
      const outputFile = `${outputPath}/${outputFileName}`
    
     try {
      await getAudio(inputFile, outputFile)
     } catch (err){
      console.log(err)
     }
    }
  } else {
    console.log('No files in the directory')
  }
}

module.exports = {
  extract
}
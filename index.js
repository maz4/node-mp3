const {getAudio} = require('./src/exportAudio');
const {getFilesListArray, replaceExtensionToMp3} = require('./src/manageFiles');

const [inputArg, outputArg] = process.argv.slice(2);

const INPUT_DIR = './input'
const OUTPUT_DIR = './output'

const inputPath = inputArg || INPUT_DIR
const outputPath = outputArg || OUTPUT_DIR

const filesList = getFilesListArray(inputPath);

const amountOfFiles = filesList.length;

if(amountOfFiles){
  for(let i = 0; i < amountOfFiles; i++){
    const inputFile = `${inputPath}/${filesList[i]}`
    const outputFileName = replaceExtensionToMp3(filesList[i])
    const outputFile = `${outputPath}/${outputFileName}`
  
    getAudio(inputFile, outputFile)
  }
} else {
  console.log('No files in the directory')
}

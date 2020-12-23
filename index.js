const { getAudio } = require('./src/exportAudio');
const { getFilesListArray, replaceExtensionToMp3, filterFiles } = require('./src/manageFiles');

const [inputArg, outputArg] = process.argv.slice(2);

const INPUT_DIR = './input';
const OUTPUT_DIR = './output';

const inputPath = inputArg || INPUT_DIR;
const outputPath = outputArg || OUTPUT_DIR;

const filesList = getFilesListArray(inputPath);
const filteredFiles = filterFiles(filesList);

const amountOfFiles = filteredFiles.length;

async function extract() {
  if (amountOfFiles) {
    for (let i = 0; i < amountOfFiles; i++) {
      const inputFile = `${inputPath}/${filteredFiles[i]}`;
      const outputFileName = replaceExtensionToMp3(filteredFiles[i]);
      const outputFile = `${outputPath}/${outputFileName}`;

      try {
        await getAudio(inputFile, outputFile);
      } catch (err) {
        console.log(err);
      }
    }
  } else {
    console.log('\nNo media files in the directory\n');
  }
}

extract();

const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs')

const INPUT_DIR = './input'
const OUTPUT_DIR = './output'

const {readdirSync} = fs;

const filesList = readdirSync(INPUT_DIR).map(file => file)

const inputFile = `${INPUT_DIR}/${filesList[0]}`
const outputFile = `${OUTPUT_DIR}/test1.mp3`

//Test
// ffmpeg(inputFile)
//   .output(outputFile)
//   .noVideo()
//   .audioCodec('libmp3lame')
//   // .duration(134.5)
//   .on('start', function() {
//     console.log('Processing your file');
//   })
//   .on('end', function() {
//     console.log('Finished processing');
//   })
//   .on('error', function(err) {
//     console.log('Error happened: ', err);
//   })
//   .run()
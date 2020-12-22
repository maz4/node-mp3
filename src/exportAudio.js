const ffmpeg = require('fluent-ffmpeg')

const MP3_CODEC = 'libmp3lame'

function getAudio(input, output){
  ffmpeg(input)
    .output(output)
    .noVideo()
    .audioCodec(MP3_CODEC)
    .on('start', () => console.log('Processing:', input))
    .on('end', () => console.log('Finished:', output))
    .on('error', (err) => console.log('Error happened: ', err))
    .run()
}

module.exports = {
    getAudio
}
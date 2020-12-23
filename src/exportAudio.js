const ffmpeg = require('fluent-ffmpeg');

const MP3_CODEC = 'libmp3lame';

async function getAudio(input, output) {
  if (!input || !output) {
    throw new Error('No input or output provided');
  }

  return new Promise((res, rej) => {
    ffmpeg(input)
      .output(output)
      .noVideo()
      .audioCodec(MP3_CODEC)
      .on('start', () => console.log('\nProcessing:', input))
      .on('end', () => {
        console.log('Finished:', output);
        res();
      })
      .on('error', (err) => {
        console.log('Error happened: ', err);
        rej(err);
      })
      .run();
  });
}

module.exports = {
  getAudio
};

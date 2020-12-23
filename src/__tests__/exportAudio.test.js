const { getAudio } = require('../exportAudio');

describe('exportAudio.js', () => {
  it('should reject promise if no input or output provided', async () => {
    try {
      await getAudio();
    } catch (err) {
      expect(err.message).toBe('No input or output provided');
    }
  });
});

const { getFilesListArray, replaceExtensionToMp3, filterFiles } = require('../manageFiles');
const fs = require('fs');

jest.mock('fs');
const testFileNames = ['smallFLV.flv', 'smallMP4.mp4', 'smallOGV.ogv', 'smallWEBM.webm', 'test file.txt'];

describe('manageFiles.js', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should filter files with allowed extensions', () => {
    const result = filterFiles(testFileNames);
    const expectedResult = ['smallFLV.flv', 'smallMP4.mp4', 'smallOGV.ogv', 'smallWEBM.webm'];
    expect(result).toEqual(expectedResult);
  });

  it('should return an empty array if no  array or array as argument has been provided', () => {
    const result = filterFiles();
    expect(result).toEqual([]);
  });

  it('should replace input file name with .mp3', () => {
    const result = replaceExtensionToMp3(testFileNames[0]);
    expect(result).toBe('smallFLV.mp3');
  });

  it('should return an array with files from a directory which ahs mixed files and folders', () => {
    const testFiles = ['smallFLV.flv', 'smallMP4.mp4', 'test folder one'];
    const mockReaddirSync = jest.spyOn(fs, 'readdirSync');
    mockReaddirSync.mockImplementation(() => testFiles);

    const result = getFilesListArray('./');
    const expectedResult = ['smallFLV.flv', 'smallMP4.mp4'];
    expect(result).toEqual(expectedResult);
  });
});

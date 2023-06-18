import { rename as renameFile, access } from 'fs/promises';
import { FOLDER_FILES_PATH, ERROR_MSG } from './constants.js';

const originFileName = 'wrongFilename.txt';
const newFileName = 'properFilename.md';
const originFilePath = `${FOLDER_FILES_PATH}/${originFileName}`;
const newFilePath = `${FOLDER_FILES_PATH}/${newFileName}`;

const rename = async () => {
  try {
    await access(originFilePath);
    try {
      await access(newFilePath);
      throw new Error(`${ERROR_MSG}! ProperFilename.md already exists`);
    } catch {
      await renameFile(originFilePath, newFilePath);
    }
  } catch {
    throw new Error(`${ERROR_MSG}! There's no file wrongFilename.txt`);
  }
};

await rename();

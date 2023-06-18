import { rename as renameFile, access } from 'fs/promises';
import { FOLDER_FILES_PATH, ERROR_MSG } from './constants.js';

const ORIGIN_FILE_NAME = 'wrongFilename.txt';
const NEW_FILE_NAME = 'properFilename.md';
const ORIGIN_FILE_PATH = `${FOLDER_FILES_PATH}/${ORIGIN_FILE_NAME}`;
const NEW_FILE_PATH = `${FOLDER_FILES_PATH}/${NEW_FILE_NAME}`;

const rename = async () => {
  try {
    await access(ORIGIN_FILE_PATH);
    try {
      await access(NEW_FILE_PATH);
      throw new Error(`${ERROR_MSG}! ProperFilename.md already exists`);
    } catch {
      await renameFile(ORIGIN_FILE_PATH, NEW_FILE_PATH);
    }
  } catch {
    throw new Error(`${ERROR_MSG}! There's no file wrongFilename.txt`);
  }
};

await rename();

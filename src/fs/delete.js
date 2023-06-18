import { unlink, access } from 'fs/promises';
import { FOLDER_FILES_PATH, ERROR_MSG } from './constants.js';

const FILE_NAME = 'fileToRemove.txt';
const FILE_PATH = `${FOLDER_FILES_PATH}/${FILE_NAME}`;

const remove = async () => {
  try {
    await access(FILE_PATH);
    await unlink(FILE_PATH);
  } catch {
    throw new Error(ERROR_MSG);
  }
};

await remove();

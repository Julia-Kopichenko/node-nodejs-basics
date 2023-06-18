import { unlink, access } from 'fs/promises';
import { FOLDER_FILES_PATH, ERROR_MSG } from './constants.js';

const fileName = 'fileToRemove.txt';
const filePath = `${FOLDER_FILES_PATH}/${fileName}`;

const remove = async () => {
  try {
    await access(filePath);
    await unlink(filePath);
  } catch {
    throw new Error(ERROR_MSG);
  }
};

await remove();

import { readdir, access } from 'fs/promises';
import { FOLDER_FILES_PATH, ERROR_MSG } from './constants.js';

const list = async () => {
  try {
    await access(FOLDER_FILES_PATH);

    const fileNames = await readdir(FOLDER_FILES_PATH);

    console.log(fileNames);
  } catch {
    throw new Error(ERROR_MSG);
  }
};

await list();

import { writeFile } from 'fs/promises';
import { FOLDER_FILES_PATH, ERROR_MSG } from './constants.js';

const FILE_NAME = 'fresh.txt';
const FILE_CONTENT = 'I am fresh and young';
const FILE_PATH = `${FOLDER_FILES_PATH}/${FILE_NAME}`;

const create = async () => {
  try {
    await writeFile(FILE_PATH, FILE_CONTENT, {
      flag: 'wx',
    });
  } catch {
    throw new Error(ERROR_MSG);
  }
};

await create();

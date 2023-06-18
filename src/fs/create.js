import { writeFile } from 'fs/promises';
import { FOLDER_FILES_PATH, ERROR_MSG } from './constants.js';

const fileName = 'fresh.txt';
const fileContent = 'I am fresh and young';
const filePath = `${FOLDER_FILES_PATH}/${fileName}`;

const create = async () => {
  try {
    await writeFile(filePath, fileContent, {
      flag: 'wx',
    });
  } catch {
    throw new Error(ERROR_MSG);
  }
};

await create();

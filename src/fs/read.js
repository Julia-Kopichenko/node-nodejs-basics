import { readFile } from 'fs/promises';
import { FOLDER_FILES_PATH, ERROR_MSG } from './constants.js';

const fileName = 'fileToRead.txt';
const filePath = `${FOLDER_FILES_PATH}/${fileName}`;

const read = async () => {
  try {
    const contents = await readFile(filePath, { encoding: 'utf8' });

    console.log(contents);
  } catch {
    throw new Error(ERROR_MSG);
  }
};

await read();

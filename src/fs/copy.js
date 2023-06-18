import { readdir, copyFile, mkdir, access } from 'fs/promises';
import { FOLDER_FS_PATH, FOLDER_FILES_PATH, ERROR_MSG } from './constants.js';
import { checkFolderExists } from './helpers.js';

const destinationFolderName = 'files_copy';
const destinationFolderPath = `${FOLDER_FS_PATH}/${destinationFolderName}`;

const copy = async () => {
  try {
    if (!(await checkFolderExists(FOLDER_FILES_PATH))) {
      throw new Error(`${ERROR_MSG}! Files folder doesn't exists`);
    }
    if (await checkFolderExists(destinationFolderPath)) {
      throw new Error(`${ERROR_MSG}! Destination folder files_copy already exists`);
    }

    await mkdir(destinationFolderPath, { recursive: true });

    const fileNames = await readdir(FOLDER_FILES_PATH);

    const copyPromises = fileNames.map((fileName) => copyFile(`${FOLDER_FILES_PATH}/${fileName}`, `${destinationFolderPath}/${fileName}`));

    await Promise.all(copyPromises);
  } catch {
    throw new Error(ERROR_MSG);
  }
};

await copy();

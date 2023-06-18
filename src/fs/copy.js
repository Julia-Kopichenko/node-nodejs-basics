import { readdir, copyFile, mkdir, access } from 'fs/promises';
import { FOLDER_FS_PATH, FOLDER_FILES_PATH, ERROR_MSG } from './constants.js';
import { checkFolderExists } from './helpers.js';

const DESTINATION_FOLDER_NAME = 'files_copy';
const DESTINATION_FOLDER_PATH = `${FOLDER_FS_PATH}/${DESTINATION_FOLDER_NAME}`;

const copy = async () => {
  try {
    if (await checkFolderExists(DESTINATION_FOLDER_PATH)) {
      throw new Error(`${ERROR_MSG}! Destination folder files_copy already exists`);
    }
    if (!(await checkFolderExists(FOLDER_FILES_PATH))) {
      throw new Error(`${ERROR_MSG}! Files folder doesn't exists`);
    }

    await mkdir(DESTINATION_FOLDER_PATH, { recursive: true });

    const fileNames = await readdir(FOLDER_FILES_PATH);

    const copyPromises = fileNames.map((fileName) => copyFile(`${FOLDER_FILES_PATH}/${fileName}`, `${DESTINATION_FOLDER_PATH}/${fileName}`));

    await Promise.all(copyPromises);
  } catch (error) {
    throw new Error(`${ERROR_MSG}! ${error}`);
  }
};

await copy();

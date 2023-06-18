import { stat } from 'fs/promises';

export const checkFolderExists = async (folderPath) => {
  try {
    await stat(folderPath);
    return true;
  } catch {
    return false;
  }
};

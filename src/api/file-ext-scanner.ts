/**
* @author Ajay Chambers <w3dojo@gmail.com>
* @copyright COPYRIGHT 2022 - Andrew Jay Chambers
* @license Apache-2.0
* @JAYD3V
* @link Https://www.GitHub.com/JAYD3V/Alloy
* */

// TODO: "Set ESLint to enforce comment-max-len rule @ 80 Characters max."

import { join, extname } from 'node:path';
import { readdirSync } from 'node:fs';
import { Dirent } from 'node:fs';
import genErrMesg from './gen-err-mesg.js';

type StrOrStrArr<T> = T | ArrayOfStrOrStrArr<T>;

type ArrayOfStrOrStrArr<T> = Array<StrOrStrArr<T>>


/** @constant CWD "Current Working Directory" */
export const CWD = process.cwd();

const files: ArrayOfStrOrStrArr<string> = [];

fileExtScanner.bind(files);

/**
  * **fileExtScanner** — _"Recursively scans a directory for all files that end with
  * the fileExtension passed to the ext parameter. Returns an array that contains the
  * found files pathnames. Pathnames are generated relative to the path of the dir
  * where the search began, or in other words; the paths are generated relative to
  * the path argument passed into the dirpath parameter."_
  * _________________________________________________________________________________
  *
  * @function fileExtScanner
  * @param dirpath — _"Path where the search will start at."_
  * */
export function fileExtScanner(fileExt: string, dirpath: string)
{
   try {
      const beforeDir = dirpath;
      let next = dirpath;

      const results = readdirSync(dirpath, { withFileTypes: true });

      console.log('READING FROM: ' + dirpath);

      results.forEach((dirent: Dirent, i: number, direntArr: Dirent[]) =>
      {
         next = join(dirpath, dirent.name);

         if (dirent.isFile()){
            files.push(next);
         }

         if (dirent.isDirectory()) {
            const nextFiles = fileExtScanner(fileExt, next);
            files.push(nextFiles);
         }

         next = beforeDir;
      });

      return files;
   } catch (e: unknown) {
      throw new Error(genErrMesg.fileReadErr(dirpath, e as string));
   }
}

/*

! TODO: "Handle the case where `dirEntity` is not a file or directory" */
function getDirEntitysType(dirEntity: Dirent)
{
   if (dirEntity.isDirectory()) return 'directory';
   return 'file'; // forcing return value to be a dir or file
}

import { join, basename } from 'node:path';
import { readdir } from 'node:fs/promises';
import { Dirent, PathLike } from 'node:fs';
import genErrMesg from './gen-err-mesg.js';
import { CWD } from './util-fn.js';


type Directory = { [ key: string ]: Directory; } | Directory[] | string;


/**
 * **`IconContainer` —**
 * _"An abstraction of the svg-icon directory used by the extension maintainer for storing
 * the svg-icon libraries"_
 * */
export class IconContainer
{
   private IconContainer: Directory;
   public baseDirPath: string;
   public baseDir: string;


   /**
    * #### Using the IconContainer Class
    * - Reference a project dir (aka CWD) with `${cwd}/path2BaseDir`
    * - Reference the dir IconContainer is instantiated in with `./path2BaseDir`
    * - Verify the path appended by CWD by using the following:
    * `````````````````````````````````````````````````````````````````````
      const IconContainer = new IconContainer('path/arg/doesNot/change/CWD');
      console.log(IconContainer.CWD); // Prints path appended by ${CWD}
    * `````````````````````````````````````````````````````````````````````
    * &nbsp;
    * @param pathToBaseDirectory "This will be the tree's base directory"
    * */
   constructor(PathToBaseDir = join(CWD, 'extension/theme/icons'))
   {
      this.IconContainer = [];
      this.baseDirPath = PathToBaseDir;
      this.baseDir = basename(PathToBaseDir);
   }
}

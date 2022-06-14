import { PathLike } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
// import { format as fmt } from'node:util';



const C_W_D = process.cwd();
const iconDirPath = 'theme/icons/collection-boomerang-arrows';
const fullIconDirPath = join(C_W_D, iconDirPath);

async function getSvgFileNames(path:PathLike){
   try {
      const files = await readdir(path);
      for (const file of files){ console.log(file); }
   } catch (err) {
      console.error(err);
   }
}

getSvgFileNames(join(fullIconDirPath));

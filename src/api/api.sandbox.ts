import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export class FooBar
{
   filename: string;
   dirname: string;

   constructor()
   {
      this.filename = fileURLToPath(import.meta.url);
      this.dirname = path.dirname(__filename);
   }

   printFileName()
   {
      console.log('\nTHIS.FILENAME: ' + this.filename);
      console.log('\n__FILENAME: ' + __filename);
   }

   printDirName()
   {
      console.log('\nTHIS.DIRNAME: ' + this.dirname);
      console.log('\n__DIRNAME: ' + __dirname);
   }

   static staticPrintFileName()
   {
      console.log('\n__FILENAME: ' + __filename);
   }

   static staticPrintDirName()
   {
      console.log('\n__DIRNAME: ' + __dirname);
   }
}

export function getFileName(fileName = fileURLToPath(import.meta.url))
{
   console.log(fileName);
   return fileName;
}

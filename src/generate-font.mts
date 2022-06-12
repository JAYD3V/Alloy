import { webfont } from 'webfont';
import { writeFileSync, writeFile } from 'node:fs';
import { format as fmt } from 'node:util';
import { Buffer } from 'node:buffer';
// const CWD = process.cwd();
// const FONT_DIR = 'assets/font';
const FONT_NAME = 'alloy-iconic-icon-font';
// const FONT_TYPE = 'woff';
/*

const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
 */
const FONTPATH
   = '/home/jayd3v/Development/VSCode-Ext/Alloy/assets/font/'
   + ' alloy-iconic-icon-font.woff';

webfont({
   files: './assets/svg/collection-boomerang-arrows/**/*.svg',
   fontName: 'my-font-name'
})
   .then((result) => {
      Function.prototype(result);

      if (result.woff !== undefined){
         writeFileSync(FONTPATH, result.woff);
      } else {
         console.error(
            '\n\x1b[38;2;240;28;40m'
               + 'AN ERROR HAS OCCURRED!'
               + '\x1b[0m\n'
               + 'What Happened?:\n'
               + 'The error occurred while attempting to convert the Alloy\n'
               + 'VS Code extensions SVG paths into a collection of glyphs\n'
               + 'as a WOFF font.\n\n'
               + '\1x1b[38;2;40;200;80;'
               + 'File Loc: "./src/generate-font.mts"'
               + '\x1b[0m\n\n'
         );
      }

      console.log(result);

      return result;
   })
   .catch((error: any) => {
      throw error;
   });

/*
             const result: = await webfont.webfont({
                files: svgs,
                formats: [FONT_TYPE],
                startUnicode: 0xe000,
                verbose: true,
                normalize: true,
                sort: false
            });
        */

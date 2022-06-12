import * as fs from 'fs';
import { join } from 'path';
import { format as fmt } from 'util';
import { readdirSync } from 'node:fs';

const CWD  =  process.cwd();
const FONT_ID  =  'alloy-iconic-icon-font';
const ICON_DIR  =  ``;
const FONT_TYPE  =  'woff';
const FONT_DIR  =  'theme';

type GenResPathOpts = {
    CWD: string;
    resDir: string;
    id: string;
    mimeType: string;
}

/**
  *
  * @param opts Object containing options needed to generate the resources path.
  * @param {string} opts.CWD The project's root (most-base level) directory. A good way to get it is using the built-in Node.js method `process.cwd()`.
  * @param {string} opts.resDir Resources file-location.
  * @param {string} opts.id The resource's id, this will be the resource's filename, but without the file-extension.
  * @param {string} opts.mimeType Resource's type. Same as the res's file-ext, but it doesn't have the accessor-dot -> `.` (for example a JPEG would be `jpg`, and not `.jpg`).
  * @return {string} Filepath generated from the arguments passed into the function's parameters.
  */
export function genResPath(opts: GenResPathOpts): string{
    return join(opts.CWD, opts.resDir, fmt('%s.%s', opts.id, opts.mimeType));
}

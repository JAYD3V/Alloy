/* eslint-disable @typescript-eslint/no-var-requires */

const webfont = require('webfont');
const fs = require('fs');
const join = require('path').join;
const cwd = require('process').cwd;
const fmt = require('node:util').format;

const CWD = cwd();
const FONT_ID = 'alloy-iconic-icon-font';
const FONT_TYPE = 'woff';
const FONT_DIR = 'theme';

/**
 * @param {string} rootDir Project directory (aka rootdir)
 * @param {string} outDir The directory for the font to be placed in
 * @param {string} id The fonts id, this will be the fonts filename
 * @param {string} type Type of font, aka font's file extension
 * @returns A path generated from the arguments passed into the parameters
 */
function genFontPath(rootDir, outDir, id, type) {
    return join(rootDir, outDir, fmt('%s.%s', id, type));
}

const fontPath = genFontPath(CWD, FONT_DIR, FONT_ID, FONT_TYPE);

const svgs = [
    /* 00 | 'explorer-view-icon' */
    'explorer-view.svg',
    /* 01 | 'search-view-icon' */
    'search-view.svg',
    /* 02 | 'run-view-icon' */
    'debug-view.svg',
    /* 03 | 'source-control-view-icon' */
    'git-view.svg',
    /* 04 | 'extensions-view-icon' */
    'extensions-view.svg',
    /* 05 | 'feedback' */
    'smiley.svg',
    /* 06 | 'folding-expanded' */
    'folding-expanded.svg',
    /* 07 | 'folding-collapsed' */
    'folding-collapsed.svg',
    /* 08 | 'tree-item-expanded' */
    'expando-expanded.svg',
    /* 09 | 'tree-item-collapsed' */
    'expando-collapsed.svg'
].map((name) => join(__dirname, '..', 'icons', name));

async function generateFont() {
    try {
        const result = await webfont.webfont({
            files: svgs,
            formats: [FONT_TYPE],
            startUnicode: 0xe000,
            verbose: true,
            normalize: true,
            sort: false
        });

        fs.writeFileSync(fontPath, result.woff, 'binary');
        console.log(`Font created at ${fontPath}`);

    } catch (err) {
        console.error('Font creation failed.', err);
    }
}

generateFont();

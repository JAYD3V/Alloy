/**
* @copyright COPYRIGHT 2022 - JAYD3V
* @license Apache-2.0
* @author Andrew J. Chambers <w3dojo@gmail.com>
* @link https://www.github.com/JAYD3V/Alloy
* @JAYD3V
* */

import { join } from 'node:path';
import { fileExtScanner, CWD } from './api/util-fn.js';


function testFn(){
   const files = fileExtScanner('.svg', join(CWD, 'extension/theme/icons'));
   console.log(files);
}

testFn();

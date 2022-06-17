
// IMPORTED RTE LIBRARIES/API's
import { ok, equal, strictEqual, deepEqual, deepStrictEqual } from 'node:assert/strict';

// IMPORTED DEPENDENCIES
import { expect, should } from 'chai';
import { it } from 'mocha';

// IMPORTED FROM PROJECT
import { IconContainer } from '../api/icon-container.js';
import MESG from './lib/test-mesg.js';


async function iconContainerTest()
{
   await describe('iconContainer', async function ()
   {
      const iconContainer = new IconContainer();

      describe('#baseDir', function ()
      {
         it('iconContainer.baseDir should have a value of "icons"', async function ()
         {
            const baseDir: string = iconContainer.baseDir;
            strictEqual(baseDir, 'icons');
         });
      });

      await describe('#iconCollections', async function ()
      {
         it(MESG.ICON_COLLECTION_MESG, async function ()
         {
            iconContainer.scanContainer();
         });
      });
   });
}

iconContainerTest();

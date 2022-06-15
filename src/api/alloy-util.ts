type Directory = { [ key: string ]: Directory; } | Directory[] | string;

const fileTree: Directory = [ 'foo', [ 'foo', [ 'foo' ] ] ];

export class FileTree
{
   private fileTree: Directory;
   public CWD = process.cwd();

   /**
    * #### Using the FileTree Class
    * ---------------------------------------------------------------------
    * - Reference a project dir (aka CWD) with `${cwd}/path2BaseDir`
    * - Reference the dir FileTree is instantiated in with `./path2BaseDir`
    * - Verify the path appended by CWD by using the following:
    *
    * `````````````````````````````````````````````````````````````````````
      const fileTree = new FileTree('path/arg/doesNot/change/CWD');
      console.log(fileTree.CWD); // Prints path appended by ${CWD}
    * `````````````````````````````````````````````````````````````````````
    *
    * ---------------------------------------------------------------------
    * @param pathToBaseDirectory "This will be the tree's base directory"
    */
   constructor(pathToBaseDirectory: string)
   {
      this.fileTree = [];
   }

   printFileTree()
   {
      console.log(this.fileTree);
   }
}

const fileReadError = (dirpath:string, mesg?: string)=> {
   const _mesg = mesg ? '\n' + mesg: '\n';
   return _mesg + '\nERROR TYPE: "DIR_READ_ERROR"'
         + '\nThe error occurred while attempting to asynchronously read from'
         + '\na directory. The path that was being read from is printed below:'
         + `\n\nDIRPATH: "${dirpath}"\n\n`;
};

const genErrMesg = {
   fileReadErr: fileReadError
};

export default genErrMesg;

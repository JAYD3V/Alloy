import { webfont } from 'webfont';

webfont({
    files: 'src/svg-icons/**/*.svg',
    fontName: 'my-font-name'
}).then((result) => {
    Function.prototype(result);

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

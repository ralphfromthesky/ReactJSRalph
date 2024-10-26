//this file is for production 'node custom-buildByRalph.js' in terminal for  creating a production folder for deployment

const { build } = require("vite");

build({
  build: {
    outDir: "tae",
  },
}).then(() => console.log('tae build!'))
  .then(() => {
    return build({
      build: {
        outDir: "itlog",
      },
    });
  }).then(() => console.log('itlog build!'))
  .then(() => {
    return build({
      build: {
        outDir: "mani",
      },
    });
  }).then(() => console.log('all build completed!'))

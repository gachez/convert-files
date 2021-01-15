
const libre = require('libreoffice-convert');
const path = require('path');
const fs = require('fs');

 module.exports = (extension2convert, file2convert, newfilename) => {

    const outputPath = path.join(__dirname, `/${newfilename}${extension2convert}`);
     
    // Read file
    const file = fs.readFileSync(file2convert);
    // Convert it to pdf format with undefined filter (see Libreoffice doc about filter)
    alert('coverting...')
    libre.convert(file, extension2convert, undefined, (err, done) => {
        if (err) {
          console.log(`Error converting file: ${err}`);
          alert('error converting the file.')
          return 0;
        }
        
        // Here in done you have pdf file which you can save or transfer in another stream
        console.log('success');
        alert('File succesfully downloaded in the outputs folder');
        fs.writeFileSync(outputPath, done);
    });
}

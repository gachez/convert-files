/* We need to implement the logic required to perform the 
following tasks:
 1. Convert Pdf to docx
 2. Covert Pdf to jpg
 3. Merge different pdf docs together
Libraries I will use:
 1. libreoffice-convert
 2. easy-pdf-merge
 */
const convertFilewithLibre = require('./libreconverter.js');
const mergeFiles = require('./mergeFiles');
const extend = '.pdf';


module.exports = {
    convertFilewithLibre: convertFilewithLibre,
    mergeFiles: mergeFiles
}

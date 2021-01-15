const merge = require('easy-pdf-merge');

const mergeFiles = (source_files, dest_file_path) => {
    merge(source_files, dest_file_path, function (err) {
        if (err) {
            return console.log(err)
        }
        alert('Successfully merged')
        console.log('Success')
    });
}

module.exports.mergeFiles = mergeFiles;

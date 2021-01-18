const merge = require('easy-pdf-merge');

const mergeFiles = (source_files, dest_file_path) => {
    document.getElementsByClassName('overlay')[0].style.display = 'flex';
    merge(source_files, dest_file_path, function (err) {
        if (err) {
            return console.log(err)
        }
        document.getElementsByClassName('overlay')[0].style.display = 'none';
        alert('Successfully merged')
        console.log('Success')
    });
}

module.exports.mergeFiles = mergeFiles;

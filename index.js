var fs = require('fs');
var path = require('path');
var yargs = require('yargs');
var argv = yargs.options({
    directory: { type: 'string', demandOption: true, alias: 'd' }
}).argv;
var directoryPath = path.resolve(argv.directory);
var extensions = {
    music: ['.mp3', '.wav', '.flac', '.aac', '.ogg', '.wma', '.m4a', '.alac', '.als', '.rpp', '.band', '.mid', '.midi'],
    pictures: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.raw', '.svg', '.webp', '.psd', '.ai', '.eps', '.ico', '.HEIC'],
    documents: ['.pdf', '.doc', '.docx', '.txt', '.xls', '.ppt', '.xlsx', '.pptx', '.odt', '.csv', '.xml', '.rtf'],
    video: ['.mp4', '.mov', '.avi', '.mkv', '.wmv', '.flv', '.webm'],
    installerEx: ['.exe', '.dmg', '.pkg', '.deb', '.rpm']
};
var musicDir = path.join(directoryPath, 'Music');
var picDir = path.join(directoryPath, 'Pictures');
var docDir = path.join(directoryPath, 'Document');
var vidDir = path.join(directoryPath, 'Video');
var instDir = path.join(directoryPath, 'Installers');
function organizeFiles(directoryPath) {
    fs.readdir(directoryPath, function (error, files) {
        if (error) {
            console.log('Something went wrong: ', error);
            return;
        }
        files.forEach(function (file) {
            var filePath = path.join(directoryPath, file);
            var fileName = path.basename(filePath);
            fs.stat(filePath, function (error, stats) {
                if (error) {
                    console.log('Something went wrong: ', error);
                    return;
                }
                if (stats.isFile()) {
                    var fileExtension = path.extname(file);
                    if (extensions.music.includes(fileExtension)) {
                        fs.mkdir(musicDir, { recursive: true }, function (error) { console.log("Something went wrong: " + error); });
                        var destPath = path.join(musicDir, fileName);
                        fs.rename(filePath, destPath, function (error) { console.log("Something went wrong: " + error); });
                    }
                    else if (extensions.pictures.includes(fileExtension)) {
                        fs.mkdir(picDir, { recursive: true }, function (error) { console.log("Something went wrong: " + error); });
                        var destPath = path.join(picDir, fileName);
                        fs.rename(filePath, destPath, function (error) { console.log("Something went wrong: " + error); });
                    }
                    else if (extensions.documents.includes(fileExtension)) {
                        fs.mkdir(docDir, { recursive: true }, function (error) { console.log("Something went wrong: " + error); });
                        var destPath = path.join(docDir, fileName);
                        fs.rename(filePath, destPath, function (error) { console.log("Something went wrong: " + error); });
                    }
                    else if (extensions.video.includes(fileExtension)) {
                        fs.mkdir(vidDir, { recursive: true }, function (error) { console.log("Something went wrong: " + error); });
                        var destPath = path.join(vidDir, fileName);
                        fs.rename(filePath, destPath, function (error) { console.log("Something went wrong: " + error); });
                    }
                    else if (extensions.installerEx.includes(fileExtension)) {
                        fs.mkdir(instDir, { recursive: true }, function (error) { console.log("Something went wrong: " + error); });
                        var destPath = path.join(instDir, fileName);
                        fs.rename(filePath, destPath, function (error) { console.log("Something went wrong: " + error); });
                    }
                }
            });
        });
    });
}
organizeFiles(directoryPath);
// /Users/mati/Downloads

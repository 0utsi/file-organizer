var fs = require('fs');
var path = require('path');
var yargs = require('yargs');

var argv = yargs.options({
	directory: { type: 'string', demandOption: true, alias: 'd' }
}).argv;

var directoryPath = path.resolve(argv.directory);

const extensions = {
	music: ['.mp3', '.wav', '.flac', '.aac', '.ogg', '.wma', '.m4a', '.alac', '.als', '.rpp', '.band', '.mid', '.midi'],
	pictures: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.raw', '.svg', '.webp', '.psd', '.ai', '.eps', '.ico', '.HEIC'],
	documents: ['.pdf', '.doc', '.docx', '.txt', '.xls', '.ppt', '.xlsx', '.pptx', '.odt', '.csv', '.xml', '.rtf'],
	video: ['.mp4', '.mov', '.avi', '.mkv', '.wmv', '.flv', '.webm'],
	installer: ['.exe', '.dmg', '.pkg', '.deb', '.rpm'],
};

const musicDir = path.join(directoryPath, 'Music');
const picDir = path.join(directoryPath, 'Pictures');
const docDir = path.join(directoryPath, 'Document');
const vidDir = path.join(directoryPath, 'Video')
const instDir = path.join(directoryPath, 'Installers')

function organizeFiles(directoryPath: any) {

	fs.readdir(directoryPath, (error: any, files: any[]) => {
		if (error) {
			console.log('Something went wrong: ', error);
			return;
		}

		files.forEach((file: any) => {

			const filePath = path.join(directoryPath, file);
			const fileName = path.basename(filePath)

			fs.stat(filePath, (error: any, stats: { isFile: () => any; }) => {
				if (error) {
					console.log('Something went wrong: ', error);
					return;
				}

				if (stats.isFile()) {

					const fileExtension = path.extname(file);

					if (extensions.music.includes(fileExtension)) {
						fs.mkdir(musicDir, { recursive: true }, (error: string) => { console.log("Something went wrong: " + error) })
						var destPath = path.join(musicDir, fileName)
						fs.rename(filePath, destPath, (error: string) => { console.log("Something went wrong: " + error) })
					} else if (extensions.pictures.includes(fileExtension)) {
						fs.mkdir(picDir, { recursive: true }, (error: string) => { console.log("Something went wrong: " + error) })
						var destPath = path.join(picDir, fileName)
						fs.rename(filePath, destPath, (error: string) => { console.log("Something went wrong: " + error) })
					} else if (extensions.documents.includes(fileExtension)) {
						fs.mkdir(docDir, { recursive: true }, (error: string) => { console.log("Something went wrong: " + error) })
						var destPath = path.join(docDir, fileName)
						fs.rename(filePath, destPath, (error: string) => { console.log("Something went wrong: " + error) })
					} else if (extensions.video.includes(fileExtension)) {
						fs.mkdir(vidDir, { recursive: true }, (error: string) => { console.log("Something went wrong: " + error) })
						var destPath = path.join(vidDir, fileName)
						fs.rename(filePath, destPath, (error: string) => { console.log("Something went wrong: " + error) })
					} else if (extensions.installer.includes(fileExtension)) {
						fs.mkdir(instDir, { recursive: true }, (error: string) => { console.log("Something went wrong: " + error) })
						var destPath = path.join(instDir, fileName)
						fs.rename(filePath, destPath, (error: string) => { console.log("Something went wrong: " + error) })
					}
				}
			});
		});
	});

}


organizeFiles(directoryPath);
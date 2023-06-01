const fs = require('fs');
const path = require('path');
const yargs = require('yargs');

const argv = yargs.options({
	directory: { type: 'string', demandOption: true, alias: 'd' }
}).argv;

const directoryPath = path.resolve(argv.directory);

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

function createDirectory(directory: any) {
	return new Promise<void>((resolve, reject) => {
		fs.mkdir(directory, { recursive: true }, (error: any) => {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		});
	});
}

function renameFile(sourcePath: any, destPath: any) {
	return new Promise<void>((resolve, reject) => {
		fs.rename(sourcePath, destPath, (error: any) => {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		});
	});
}

async function organizeFiles(directoryPath: any) {
	try {
		const files = await fs.promises.readdir(directoryPath);

		for (const file of files) {
			const filePath = path.join(directoryPath, file);
			const fileName = path.basename(filePath);
			const stats = await fs.promises.stat(filePath);

			if (stats.isFile()) {
				const fileExtension = path.extname(file);

				if (extensions.music.includes(fileExtension)) {
					await createDirectory(musicDir);
					const destPath = path.join(musicDir, fileName);
					await renameFile(filePath, destPath);
				} else if (extensions.pictures.includes(fileExtension)) {
					await createDirectory(picDir);
					const destPath = path.join(picDir, fileName);
					await renameFile(filePath, destPath);
				} else if (extensions.documents.includes(fileExtension)) {
					await createDirectory(docDir);
					const destPath = path.join(docDir, fileName);
					await renameFile(filePath, destPath);
				} else if (extensions.video.includes(fileExtension)) {
					await createDirectory(vidDir);
					const destPath = path.join(vidDir, fileName);
					await renameFile(filePath, destPath);
				} else if (extensions.installer.includes(fileExtension)) {
					await createDirectory(instDir);
					const destPath = path.join(instDir, fileName);
					await renameFile(filePath, destPath);
				}
			}
		}

		console.log('Organizing files complete.');
	} catch (error) {
		console.log('Something went wrong: ', error);
	}
}

organizeFiles(directoryPath);

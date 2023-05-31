const fs = require('fs');

function organizeFiles(path) {

	const files = fs.readdirSync(path);

	const musicFiles: string[] = [];
	const pictureFiles: string[] = [];
	const documentFiles: string[] = [];

	for (const file of files) {
		const ext = path.extname(file).toLowerCase();
		if (ext === '.mp3' || ext === '.wav' || ext === '.flac') {
			musicFiles.push(file);
		} else if (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.gif') {
			pictureFiles.push(file);
		} else if (ext === '.pdf' || ext === '.doc' || ext === '.docx' || ext === '.txt') {
			documentFiles.push(file);
		}
	}

	console.log(`Music files: ${musicFiles}`);
	console.log(`Picture files: ${pictureFiles}`);
	console.log(`Document files: ${documentFiles}`);
}

export default organizeFiles
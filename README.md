# File Organizer
This is a simple Node.js application that organizes
files in a specified directory based on their file
extensions. It creates separate folders for different
types of files and moves the corresponding files into
their respective folders.

Prerequisites
Make sure you have the following dependencies installed:

Node.js
Installation
Clone the repository or download the source code.
Open a terminal or command prompt and navigate to the project directory.
Run the following command to install the required dependencies:
Copy code
npm install
Usage
To use the application, follow these steps:

Open a terminal or command prompt.
Navigate to the project directory.
Run the following command:
css
Copy code
node app.js --directory <directory_path>
Replace <directory_path> with the path to the directory you want to organize.

Example
Suppose you want to organize files in the directory /Users/mati/Downloads. Open a terminal or command prompt and navigate to the project directory. Run the following command:

bash
Copy code
node app.js --directory /Users/mati/Downloads
The application will scan the specified directory and move the files into separate folders based on their extensions.

Music files (extensions: .mp3, .wav, .flac, .aac, .ogg, .wma, .m4a, .alac, .als, .rpp, .band, .mid, .midi) will be moved to the Music folder.
Picture files (extensions: .jpg, .jpeg, .png, .gif, .bmp, .tiff, .raw, .svg, .webp, .psd, .ai, .eps, .ico, .HEIC) will be moved to the Pictures folder.
Document files (extensions: .pdf, .doc, .docx, .txt, .xls, .ppt, .xlsx, .pptx, .odt, .csv, .xml, .rtf) will be moved to the Document folder.
Video files (extensions: .mp4, .mov, .avi, .mkv, .wmv, .flv, .webm) will be moved to the Video folder.
Installer files (extensions: .exe, .dmg, .pkg, .deb, .rpm) will be moved to the Installers folder.
Please note that the application will create these folders if they don't already exist.

License
This project is licensed under the MIT License.
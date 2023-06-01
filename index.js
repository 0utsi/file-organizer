var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    installer: ['.exe', '.dmg', '.pkg', '.deb', '.rpm']
};
var musicDir = path.join(directoryPath, 'Music');
var picDir = path.join(directoryPath, 'Pictures');
var docDir = path.join(directoryPath, 'Document');
var vidDir = path.join(directoryPath, 'Video');
var instDir = path.join(directoryPath, 'Installers');
function createDirectory(directory) {
    return new Promise(function (resolve, reject) {
        fs.mkdir(directory, { recursive: true }, function (error) {
            if (error) {
                reject(error);
            }
            else {
                resolve();
            }
        });
    });
}
function renameFile(sourcePath, destPath) {
    return new Promise(function (resolve, reject) {
        fs.rename(sourcePath, destPath, function (error) {
            if (error) {
                reject(error);
            }
            else {
                resolve();
            }
        });
    });
}
function organizeFiles(directoryPath) {
    return __awaiter(this, void 0, void 0, function () {
        var files, _i, files_1, file, filePath, fileName, stats, fileExtension, destPath, destPath, destPath, destPath, destPath, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 20, , 21]);
                    return [4 /*yield*/, fs.promises.readdir(directoryPath)];
                case 1:
                    files = _a.sent();
                    _i = 0, files_1 = files;
                    _a.label = 2;
                case 2:
                    if (!(_i < files_1.length)) return [3 /*break*/, 19];
                    file = files_1[_i];
                    filePath = path.join(directoryPath, file);
                    fileName = path.basename(filePath);
                    return [4 /*yield*/, fs.promises.stat(filePath)];
                case 3:
                    stats = _a.sent();
                    if (!stats.isFile()) return [3 /*break*/, 18];
                    fileExtension = path.extname(file);
                    if (!extensions.music.includes(fileExtension)) return [3 /*break*/, 6];
                    return [4 /*yield*/, createDirectory(musicDir)];
                case 4:
                    _a.sent();
                    destPath = path.join(musicDir, fileName);
                    return [4 /*yield*/, renameFile(filePath, destPath)];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 18];
                case 6:
                    if (!extensions.pictures.includes(fileExtension)) return [3 /*break*/, 9];
                    return [4 /*yield*/, createDirectory(picDir)];
                case 7:
                    _a.sent();
                    destPath = path.join(picDir, fileName);
                    return [4 /*yield*/, renameFile(filePath, destPath)];
                case 8:
                    _a.sent();
                    return [3 /*break*/, 18];
                case 9:
                    if (!extensions.documents.includes(fileExtension)) return [3 /*break*/, 12];
                    return [4 /*yield*/, createDirectory(docDir)];
                case 10:
                    _a.sent();
                    destPath = path.join(docDir, fileName);
                    return [4 /*yield*/, renameFile(filePath, destPath)];
                case 11:
                    _a.sent();
                    return [3 /*break*/, 18];
                case 12:
                    if (!extensions.video.includes(fileExtension)) return [3 /*break*/, 15];
                    return [4 /*yield*/, createDirectory(vidDir)];
                case 13:
                    _a.sent();
                    destPath = path.join(vidDir, fileName);
                    return [4 /*yield*/, renameFile(filePath, destPath)];
                case 14:
                    _a.sent();
                    return [3 /*break*/, 18];
                case 15:
                    if (!extensions.installer.includes(fileExtension)) return [3 /*break*/, 18];
                    return [4 /*yield*/, createDirectory(instDir)];
                case 16:
                    _a.sent();
                    destPath = path.join(instDir, fileName);
                    return [4 /*yield*/, renameFile(filePath, destPath)];
                case 17:
                    _a.sent();
                    _a.label = 18;
                case 18:
                    _i++;
                    return [3 /*break*/, 2];
                case 19:
                    console.log('Organizing files complete.');
                    return [3 /*break*/, 21];
                case 20:
                    error_1 = _a.sent();
                    console.log('Something went wrong: ', error_1);
                    return [3 /*break*/, 21];
                case 21: return [2 /*return*/];
            }
        });
    });
}
organizeFiles(directoryPath);

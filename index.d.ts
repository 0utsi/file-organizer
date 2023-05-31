declare var fs: any;
declare var path: any;
declare var yargs: any;
declare var argv: any;
declare var directoryPath: any;
declare const extensions: {
    music: string[];
    pictures: string[];
    documents: string[];
};
declare const musicDir: any;
declare const picDir: any;
declare const docDir: any;
declare function organizeFiles(directoryPath: any): void;

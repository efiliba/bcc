import path from 'path';

const staticFilesPath = 'https://storage.googleapis.com/bestcc';
//const staticFilesPath = '';

const config = {
    port: process.env.PORT || 8000,
    //baseURL: typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${(process.env.PORT || 8000)}`) : '',
    apiUrl: 'http://bcc-api.appspot.com',
    //apiUrl: 'http://14.202.155.38',
    //apiUrl: 'http://localhost:8001',
    staticFiles: staticFilesPath,
    serveStaticFiles: staticFilesPath,
    //serveStaticFiles: path.resolve(__dirname, '../build'),
    //avatarPath: staticFilesPath + '/images',
    avatarPath: 'https://storage.googleapis.com/bestcc/images',
    cssPath: staticFilesPath + '/css/' + (process.env.NODE_ENV === 'production' ? 'app.min.css' : 'app.css')
};

export default config;

export const apiUrl = config.apiUrl;
export const staticFiles = staticFilesPath;
export const serveStaticFiles = config.serveStaticFiles;
export const avatarPath = config.avatarPath;
export const cssPath = config.cssPath;
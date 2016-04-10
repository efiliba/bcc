import path from 'path';

const config = {
    port: process.env.PORT || 8000,
    //baseURL: typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${(process.env.PORT || 8000)}`) : '',
    apiUrl: 'http://bcc-api.appspot.com',    
    avatarPath: 'https://storage.googleapis.com/bestcc/images'
    //avatarPath: staticFilesPath + '/images'
};

if (process.env.NODE_ENV === 'production') {
    const staticFilesPath = 'https://storage.googleapis.com/bestcc';

    config.staticFiles = staticFilesPath;
    config.serveStaticFiles = staticFilesPath;
    config.cssPath = staticFilesPath + '/css/app.min.css';
} else {
    //config.apiUrl = 'http://localhost:8001';
    //config.apiUrl = 'http://14.202.155.38';
    config.staticFiles = '';
    config.serveStaticFiles = path.resolve(__dirname, '../build');
    config.cssPath = '/css/app.css';
}

export default config;

export const apiUrl = config.apiUrl;
export const staticFiles = config.staticFiles;
export const serveStaticFiles = config.serveStaticFiles;
export const avatarPath = config.avatarPath;
export const cssPath = config.cssPath;
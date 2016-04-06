const config = {
    //baseURL: typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${(process.env.PORT || 8000)}`) : '',
    baseURL: 'http://bcc-api.appspot.com',
    //baseURL: 'http://14.202.155.38',
    //baseURL: 'http://localhost',
    port: process.env.PORT || 8000,
    staticFiles: 'https://storage.googleapis.com/bestcc',
    cssPath: 'https://storage.googleapis.com/bestcc/css/' + (process.env.NODE_ENV === 'production' ? 'app.min.css' : 'app.css')
};

export default config;

export const baseURL = config.baseURL;
export const staticFiles = config.staticFiles;
export const cssPath = config.cssPath;
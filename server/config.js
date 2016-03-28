const config = {
    mongoURL: process.env.MONGO_URL || 'mongodb://bcc:bcc@ds064628.mlab.com:64628/bcc',
    baseURL: typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${(process.env.PORT || 8000)}`) : '',
    port: process.env.PORT || 8000
};

export default config;
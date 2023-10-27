export const CONFIG = new (function () {
    
        this.API_KEY = import.meta.env.VITE_API_KEY;
        this.AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
        this.DATABASE_URL = import.meta.env.VITE_DATABASE_URL;
        this.PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
        this.STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET;
        this.MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID;
        this.APP_ID = import.meta.env.VITE_APP_ID;
        this.MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID;
        this.MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID;
        this.GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL;
        
})();
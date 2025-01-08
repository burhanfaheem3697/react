const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_ID),
    appwriteProjectUrl : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseUrl : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionUrl : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketUrl : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf
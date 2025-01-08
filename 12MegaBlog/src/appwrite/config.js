import { Client,ID,Databases,Storage,Query } from "appwrite";
import conf from "../conf/conf";
export class Service{
    client = new Client()
    databases;
    bucket;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        this.client.setProject(conf.appwriteProjectUrl)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)

    }   

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseUrl,
                conf.appwriteCollectionUrl,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
            
        } catch (error) {
            console.log(error);
            
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {

            return await this.databases.updateDocument(
                conf.appwriteDatabaseUrl,
                conf.appwriteCollectionUrl,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
            
        } catch (error) {
            console.log(error);
            
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseUrl,
                conf.appwriteCollectionUrl,
                slug
            )
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseUrl,
                conf.appwriteCollectionUrl,
                slug
            )
        } catch (error) {
            console.log(error);
            
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseUrl,
                conf.appwriteCollectionUrl,
                queries
            )
            
        } catch (error) {
            console.log(error);
            return false
            
            
        }
    }

    async uploadFile(file){
        try {
            
            return await this.bucket.createFile(
                conf.appwriteBucketUrl,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(error);
            return false
            
        }
    }

    async deleteFile(fileId){
        try {
            
            await this.bucket.deleteFile(
                conf.appwriteBucketUrl,
                fileId
            )
            return true
        } catch (error) {
            console.log(error);
            return false
            
            
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketUrl,
            fileId
        )
    }
}

const service = new Service()

export default service;
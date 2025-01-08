import conf from "../conf/conf";
import {Client,Account,ID} from 'appwrite'

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(import.meta.env.VITE_APPWRITE_ID)
            .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

        this.account = new Account(this.client)
        console.log("im inside constructor account is created");
        
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                //go to login
                return this.login({email,password})
            }
            else return userAccount;
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error;
        }

    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("hello there is an error in fetching account");
            
        }

        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
            
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService()

export default authService
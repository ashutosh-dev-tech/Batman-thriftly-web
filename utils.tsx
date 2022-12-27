import Router from "next/router";
import { baseUrl } from './constants';
import cookieCutter from 'cookie-cutter';

export const makeApiCall = async (url: string, apiObj:any) => {
    try{
        const res = await fetch(`${baseUrl}/${url}`, {
            ...apiObj,
            headers: {
                ...apiObj?.headers,
                ...(!url.includes('login') && {Authorization: cookieCutter.get("Authorization")})
            }            
        });
        if(!res.ok && !url.includes('test_credentials')){
            Router.push("/login");
            throw new Error("Api failed");            
        }
        const data =  await res.json();
        return data;
    }
    catch(e){
        console.log("error");
        Router.push("/login");
    }    
};

export const logout = () => {
    cookieCutter.set("Authorization", "");
    Router.push("/login");
};


export const avoidDocOverflowScroll = () => {
    setTimeout(()=> {
        const doc = document?.getElementsByTagName('html')[0];
        if(doc && doc.style){
            doc.style.overflow='hidden';
        }                
    }, 100);
;}

export const makeOverflowDefault = () => {
    setTimeout(()=> {
        const doc = document?.getElementsByTagName('html')[0];
        if(doc && doc.style){
            doc.style.overflow='visible';
        }                
    }, 100);
}
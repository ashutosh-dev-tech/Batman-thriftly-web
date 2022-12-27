import React, { useEffect, useState } from 'react'
import { makeApiCall } from '../utils';
import Header from "../components/Header";

function about() {
    const [userData, setUserData] = useState({});

    const getKeyValDiv = (data) => {
        return Object.keys(data || {}).map((curKey)=> {
            if(typeof data[curKey] == 'object')
                return;
            return <div className='p-[0.5vw] font-semibold'>{curKey}: <span className='px-[1vw]'>{''+data[curKey] || '-' }</span></div>
        })
    }
    
    useEffect(()=> {
        async function getUserInfo(){
            const data = await makeApiCall('api/me/', {});
            setUserData(data)
        }
        getUserInfo();
    }, []);

    console.log({userData});

    return (
        <>
            <Header />
            <div className=' flex justify-center items-center h-[90vh] '>
                <div className='w-[60%] rounded-[4px] border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#5566991c]'>
                    <div className='flex flex-col m-[1vw] p-[0.5vw] justify-center items-center'>
                        <h2 className='m-[1vw] text-xl decoration-solid underline'>User Data: </h2>
                        <div className='flex flex-col justify-center '>
                            {getKeyValDiv(userData?.user)}
                        </div>                
                    </div>
                    
                    <div className='flex flex-col m-[1vw] p-[0.5vw] justify-center items-center'>
                        <h2 className='m-[1vw] text-xl decoration-solid underline'>Company Data: </h2>
                        <div className='flex flex-col justify-center '>
                            {getKeyValDiv(userData?.user?.company)}
                        </div>
                    </div>
                </div>
                
            </div>  
        </>
        
                      
        );
}

export default about
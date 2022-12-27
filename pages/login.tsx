import { Form } from 'antd';
import React, { useState } from 'react';
import { Input, Button } from "antd";
import Link from 'next/link';
//import cookieCutter from 'cookie-cutter';
const cookieCutter = require('cookie-cutter');
import { makeApiCall } from '../utils';
import router from 'next/router';

function login() {
    
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [loading, setLoading] = useState(false);

    const setAuthToken = async () => {
        setLoading(true);
        const data = await makeApiCall(`api/login/`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password: pass})
        });        
        if(!data){
            alert("wrong cred");
            return;
        }
        cookieCutter.set("Authorization", `Bearer ${data.token}`);
        console.log(cookieCutter.get("Authorization"));
        const cloudInfo = await makeApiCall(`api/me/`, {});

        if(!cloudInfo?.user?.company?.is_gcp || !cloudInfo?.user?.company?.is_aws){
            router.push({
                pathname: "/integrateCloud",
                query: { gcp:  cloudInfo?.user?.company?.is_gcp, aws: cloudInfo?.user?.company?.is_aws}
            });
        }
        else{
            router.push("/");
        }
        setLoading(false);        
    }
    

  return (    
    <div className='flex justify-center items-center h-[90vh]'>
        <div className='w-[40%] rounded-[4px] border-[0.5px] border-solid border-[#E5E4E2] my-[1vw] shadow-lg'>
            <Link href="/" className=" items-center flex-1">
            <img src="https://thriftly.s3.ap-south-1.amazonaws.com/Logo.svg" className='text-center mx-auto w-[10vw] my-[2vw]'/>
            </Link>
            <div className='w-full flex justify-center'>                
                <Form
                    layout="vertical"
                    className="pt[15%] w-1/2 mb-[4vw] mx-[3.5vw]"
                >
                    <Form.Item label="Email Id" name="email" required={true}>
                        <Input 
                            onChange={(e)=>{
                                setEmail(e.target.value);
                            }}
                        />
                    </Form.Item>
                    <Form.Item label="Password" name="password" required={true}>
                        <Input.Password 
                            onChange={(e)=> {
                                setPass(e.target.value);
                            }}
                        />
                    </Form.Item>
                    <Button onClick={setAuthToken} loading={loading} className="w-full text-[black] border-double border-2	border-slate-800 mt-[1vw]" type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
                
    </div>
    
  );
}

export default login;
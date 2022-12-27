import { Button, Input, message } from 'antd';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/router'
import { makeApiCall } from '../utils';
import { StopOutlined } from '@ant-design/icons';

interface integrateCloudProps {
    gcp?: boolean;
    aws?: boolean;
}

function integrateCloud() {
    const router = useRouter();
    let hasGcp = router.query.gcp, hasAws = router.query.aws;
    const [messageApi, contextHolder] = message.useMessage();

    console.log(hasAws=='true', hasGcp=='true')
    
    const [handShakeId, setHandShakeId] = useState("");
    const [formationFormOpended, setFormationFormOpended] = useState("");
    const [arn, setArn] = useState(null);
    const [disableBtn, setDisable] = useState(true);
    const [statusLoading, setStatusLoading] = useState(false);
    const [failedConfirmation, setFailedConfirmation] = useState(false)

    useEffect(()=> {
        async function genAws() {
            const data = await makeApiCall('api/formation_url/', {});
            setHandShakeId(data?.handshake_id);
            window.open(data?.url, "_blank");
        }
        if(formationFormOpended){
            genAws();
            console.log({handShakeId})
        }
    }, [formationFormOpended]);

    function populateArnInput(e:any){
        const arnvVal = e.target.value;
        setArn(arnvVal);
        if( arnvVal ){
            setDisable(false);
        }
        else{
            setDisable(true);
        }
    }
    async function populateArn(){
        setStatusLoading(true);
        await makeApiCall('api/credentials/', {
            method: "POST",
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "cloud_provider_config": {
                    "role_arn": arn,
                    "external_id": handShakeId
                },
                "cloud_provider": formationFormOpended
            }),
        });

        try{

            const confirmation = await makeApiCall(`api/test_credentials/?provider=${formationFormOpended}`, {});
            setStatusLoading(false);
            if(confirmation.message == "Connection Success"){
                messageApi.open({
                    type: 'success',
                    content: 'Success, redirecting to Home',
                });
                
                setTimeout(()=> {
                    router.push("/");
                }, 1000);
            }
            else{
                setFailedConfirmation(true);
            }

        }
        catch(e){
            setFailedConfirmation(true);
        }
        
    }
    

    return (
    <>
        <Header />
        <div className='flex flex-1 justify-center items-center m-[2vw] p-[1vw] flex-col'>
        {contextHolder}
            {(failedConfirmation)? 
                <div className='flex justify-center items-center m-[3vw] p-[2vw]'>
                    <StopOutlined style={{ fontSize: '44px', color: 'red'}}/>
                    <div className='mfont-bold text-3xl mx-[2vw]'>Intergration failed , Please connect with our team.</div>
                </div>
                :
            !handShakeId? (
                <>
                    <div className='m-[2vw] p-[2vw] font-bold text-2xl'>Choose a cloud to integrate</div>
                    <div className='flex justify-between flex-1 items-center w-[40%] m-[2vw]'>
                        <div className='flex justify-center items-center flex-col'>
                            <img
                                src='https://thriftly.s3.ap-south-1.amazonaws.com/aws.png'
                                className='p-[2vw]'
                            />
                            <Button className='purple-arounded-btn' disabled={(hasAws=='true')} onClick={()=> {setFormationFormOpended("aws")}}>AWS</Button>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <img
                                src='https://thriftly.s3.ap-south-1.amazonaws.com/gcp.png'
                                className='p-[2vw]'
                            />
                            <Button className='purple-arounded-btn' disabled={(hasGcp=='true')} onClick={()=> {setFormationFormOpended("gcp")}}>GCP</Button>
                        </div>
                        
                    </div>
                    <Button className=' purple-arounded-btn !text-red-700 m-[2vw] !text-[10px] !font-normal !w-[5vw]' disabled={!(hasAws=='true' || hasGcp=='true')} size="small" onClick={()=> {
                        router.push("./");
                    }}> skip</Button>
                </>                
            ):            
            <>  
                <h2 className='font-bold text-2xl'>Proceed to cloud formation</h2>
                <Input 
                    placeholder='Arn No.'
                    className='w-[60%] m-[2vw]'
                    onChange={populateArnInput}                    
                />
                <Button 
                    className='purple-arounded-btn'
                    disabled={disableBtn}
                    onClick={populateArn}
                    loading={statusLoading}
                >
                {"Continue >"}
                </Button>
            </>
            
            }
            
        </div>    
    </>
    );
}

export default integrateCloud;
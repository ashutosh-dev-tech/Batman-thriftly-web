import React, { useEffect, useState } from 'react';
import StatsBox from './StatsBox';
import Link from 'next/link'
import { Button, Modal } from 'antd';
import GraphFooter from "./GraphFooter";
import { makeApiCall } from '../utils';

function Content() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [iframeStr, setIframeStr] = useState("");

    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(()=> {

        async function getIframeData() {
            try{
                const data = await makeApiCall(`api/get_dashboard/?dashboard_id=home`);
                setIframeStr(data.iframeUrl);
            }
            catch(e){
                console.log(e);
            }            
        }
        getIframeData();
    }, []);
    return (
    <div className='p-[4vw]'>
        <div className='flex flex-1 justify-between content-center items-center'>
            <h1 className='font-semibold text-[2.3vw]'>Welcome</h1>
            <Button
            className='purple-arounded-btn'
            >
                <h4 onClick={showModal}>COST ANALYSIS </h4>
             </Button>
        </div>
        
        
        <div className='flex items-center my-[1vw]'>
            <StatsBox
                heading='Cost Today '
                data='9,144,484'
            />
            <StatsBox
                heading='Cost last week'
                data='₹74,763,227'
            />
            <StatsBox
                heading='Cost this Month'
                data='₹278,017,383'
            />
        </div>
        <div className='h-[55vw] relative'>
            <iframe id="iframess"
                src={iframeStr}
                frameborder="0" width="100%" height="100%" allowtransparency>                
            </iframe>
            <GraphFooter />
        </div>
    
        <Modal title="" open={isModalOpen} centered onCancel={handleCancel} className="bg-[white] rounded-[4px] border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#5566991c] w-[587px w-[40vw] h-[20vw]" footer={null}>            
            <div className='flex flex-1 items-center justify-between p-[2vw] '>
                <Link href="/aws" className='rounded-[4px] border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#5566991c] m-[0.5'>
                    <img
                    src='https://thriftly.s3.ap-south-1.amazonaws.com/aws.png'
                    className='p-[2vw]'
                    />
                </Link>
                <Link href="/gcp" className='rounded-[4px] border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#5566991c] m-[0.5vw]'>
                    <img
                    src='https://thriftly.s3.ap-south-1.amazonaws.com/gcp.png'
                    className='p-[2vw]'
                    />
                </Link>
            </div>
            <div className='w-[100%] text-center mb-[3vw] text-lg font-semibold'>Select a cloud to see deatiled report</div>        
        </Modal>
    </div>
    )
}

export default Content;

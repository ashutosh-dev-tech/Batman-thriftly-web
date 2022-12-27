import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import GraphFooter from '../components/GraphFooter';
import { makeApiCall, avoidDocOverflowScroll, makeOverflowDefault } from '../utils';
function aws() {
    const [iframeStr, setIframeStr] = useState("");

    useEffect(()=> {
        async function getIframeData() {
            try{
                const iframeStrData = await makeApiCall(`api/get_dashboard/?dashboard_id=default_aws`);
                setIframeStr(iframeStrData.iframeUrl);
                avoidDocOverflowScroll();
            }
            catch(e){
                console.log(e);
            }      
            
        }
        getIframeData();
 
        return ()=> {
            makeOverflowDefault();
        }
    }, []);
    return (
        <>
            <Header />
            <div className='h-[100vh] relative'>
                <iframe id="iframess"
                    src={iframeStr}
                    frameborder="0" width="100%" height="100%" allowtransparency>                
                </iframe>
                <GraphFooter />
            </div>
            
        </>    
    );
}

export default aws
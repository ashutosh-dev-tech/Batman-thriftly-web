import React, { useRef } from 'react';
import IntroHeader from '../components/IntroHeader';
import { Button, Checkbox, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Link from 'next/link';

function intro() {
  const scollToRef = useRef();
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Success:', values);
    alert("will get back soon");
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const scrollTo = () => {

  };

  return (
    <>
      <IntroHeader />
      <div className='flex flex-col my-[3vw] justify-center items-center'>
        <h3 className='text-[#6E7DDB] text-[20px] leading-[16px] tracking-[-0.04em] m-[1vw]'>ARE YOU AWARE OF THE AMOUNT YOU ARE SPENDING ON THE CLOUD?</h3>
        <h2 className='text-[69px] leading-[72px] tracking-[-0.04em] m-[1vw] font-bold'>Cloud billing simplified for <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#0038FF] to-[#AD00FF]'>everyone</span></h2>
        <h5 className='m-[1vw]'>Utilize budgetary restrictions and savings opportunities to control cloud costs.</h5>
        
        <div className='flex justify-center items-center flex-col'>
          <h2 className='text-[40px] leading-[50px] m-[1vw]'>Features</h2>
          <div className='flex flex-col'>
            <div className='flex items-center justify-evenly'>
              <div className='rounded-2xl border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#5566991c] p-[1vw] m-[1vw] max-w-xs py-[1vw] h-[20vw]'>
                <img src='https://thriftly.s3.ap-south-1.amazonaws.com/gke-bg.png' className='w-[6vw]'></img>
                <div className='px-[2vw] py-[1vw]'>
                  <h2>Kubernates</h2>
                  <h3 className='text-slate-400 mb-[2vw]'>GCP</h3>
                  <p className='text-slate-800'>Know your gcp kubernates cost with our advance tracking system</p>
                </div>              
              </div>
              <div className='rounded-2xl border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#5566991c] p-[1vw] m-[1vw] max-w-xs py-[1vw] h-[20vw]'>
                <img src='https://thriftly.s3.ap-south-1.amazonaws.com/bell.png' className='w-[6vw]'></img>
                <div className='px-[2vw] py-[1vw]'>
                  <h2>Anomaly detection</h2>
                  <h3 className='text-slate-400 mb-[2vw]'>GCP, AWS</h3>
                  <p className='text-slate-800'>Get alerts on slack or email in case of anomality in billing</p>
                </div>              
              </div>
              <div className='rounded-2xl border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#5566991c] p-[1vw] m-[1vw] max-w-xs py-[1vw] h-[20vw]'>
                <img src='https://thriftly.s3.ap-south-1.amazonaws.com/euro.png' className='w-[6vw]'></img>
                <div className='px-[2vw] py-[1vw]'>
                  <h2>FinOps</h2>
                  <h3 className='text-slate-400 mb-[2vw]'>GCP, AWS</h3>
                  <p className='text-slate-800'>Make it easy for your finance team to see cloud billing reports</p>
                </div>              
              </div>
            </div>
      
            <div className='flex items-center justify-evenl'>
              <div className='rounded-2xl border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#5566991c] p-[1vw] m-[1vw] max-w-xs py-[1vw] h-[20vw]'>
                <img src='https://thriftly.s3.ap-south-1.amazonaws.com/graph.png' className='w-[6vw]'></img>
                <div className='px-[2vw] py-[1vw]'>
                  <h2>Cost transparency</h2>
                  <h3 className='text-slate-400 mb-[2vw]'>GCP, AWS</h3>
                  <p className='text-slate-800'>Get Cost transparency based on team, pod, service, etc.</p>
                </div>              
              </div>
              <div className='rounded-2xl border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#5566991c] p-[1vw] m-[1vw] max-w-xs py-[1vw] h-[20vw]'>
                <img src='https://thriftly.s3.ap-south-1.amazonaws.com/gke-bg.png' className='w-[6vw]'></img>
                <div className='px-[2vw] py-[1vw]'>
                  <h2>Recommendations</h2>
                  <h3 className='text-slate-400 mb-[2vw]'>Soon</h3>
                  <p className='text-slate-800'>Get realtime recommensations to save cost on your cloud</p>
                </div>              
              </div>
              <div className='rounded-2xl border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#5566991c] p-[1vw] m-[1vw] max-w-xs py-[1vw] h-[20vw]'>
                <img src='https://thriftly.s3.ap-south-1.amazonaws.com/flag.png' className='w-[6vw]'></img>
                <div className='px-[2vw] py-[1vw]'>
                  <h2>Priority Support</h2>
                  <h3 className='text-slate-400 mb-[2vw]'>GCP, AWS</h3>
                  <p className='text-slate-800'>Get priority support from our experts to reduce your cloud cost</p>
                </div>              
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[url('https://thriftly.s3.ap-south-1.amazonaws.com/goal.png')]	w-[100vw] h-[14vw] bg-no-repeat bg-contain text-center flex justify-center items-center">
            <h2 className=' text-[2vw] mt-[2vw] bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#5F46FF]'>Our goal is to give everyone the visibility so they <br /> never pay more than whats needed.</h2>
        </div>            
      </div>

      <div className='flex justify-center items-center flex-col'>
          <h2 className='text-[40px] leading-[50px] m-[1vw]'>How It Works?</h2>
          <div className='flex flex-col'>
            <div className='flex items-center justify-evenly'>
              <div className='rounded-2xl border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#5566991c] p-[1vw] m-[1vw] max-w-xs py-[1vw] h-[20vw] bg-[#F7F6FB]'>
                <img src='https://thriftly.s3.ap-south-1.amazonaws.com/dot.png' className='w-[5vw] my-[1vw] mx-[1.6vw]'></img>
                <div className='px-[2vw] py-[1vw]'>
                  <h2 className='text-[1.5vw] mb-[1vw]'>Integrate</h2>
                  <p className='text-slate-800'>Integrate with our saas within few clicks or take help from our support team</p>
                </div>              
              </div>
              <div className='rounded-2xl border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#5566991c] p-[1vw] m-[1vw] max-w-xs py-[1vw] h-[20vw] bg-[#F7F6FB]'>
                <img src='https://thriftly.s3.ap-south-1.amazonaws.com/setting.png' className='w-[5vw] my-[1vw] !mx-[1.6vw]'></img>
                <div className='px-[2vw] py-[1vw]'>
                  <h2 className='!text-[1.5vw] mb-[1vw]'>Analyze</h2>
                  <p className='text-slate-800'>Analyze where you are spending much and which resources costing you more than needed</p>
                </div>              
              </div>
              <div className='rounded-2xl border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#5566991c] p-[1vw] m-[1vw] max-w-xs py-[1vw] h-[20vw] bg-[#F7F6FB]'>
                <img src='https://thriftly.s3.ap-south-1.amazonaws.com/pen.png' className='w-[5vw] my-[1vw] mx-[1.6vw]'></img>
                <div className='px-[2vw] py-[1vw]'>
                  <h2 className='text-[1.5vw] mb-[1vw]'>Refactor</h2>
                  <p className='text-slate-800'>Refactor the resources and save in millions</p>
                </div>              
              </div>
            </div>
          </div>
      </div>

      <div className='flex justify-center items-center flex-col'>
          <h2 className='text-[40px] leading-[50px] m-[1vw]'>Our Pricing</h2>
          <div className='flex flex-col'>
            <div className='flex items-center justify-evenly'>
              <div className='rounded-2xl border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#5566991c] p-[1vw] m-[1vw] max-w-xs py-[1vw] flex flex-col justify-center items-center'>
                <div className='p-[1vw]'>
                  <h3 className='text-[2vw]'>Basic $499 <span className='text-[1vw]'>/ month</span></h3>
                  <h4 className='text-[#667085] py-[1vw]'>for cloud billing upto $25k</h4>
                  <div className='border-[0.5px] border-solid'></div>
                </div>                
                <div className='p-[1vw]'>
                  <div className='flex items-center py-[0.5vw] '><img src='https://thriftly.s3.ap-south-1.amazonaws.com/tick.png'></img><h3 className='text-[#1A1A1A] pl-[1vw]'>Built-in Cost Dashboards</h3></div>
                  <div className='flex items-center py-[0.5vw]'><img src='https://thriftly.s3.ap-south-1.amazonaws.com/tick.png'></img><h3 className='text-[#1A1A1A] pl-[1vw]'>Cost Budgets & Anomalies</h3></div>
                  <div className='flex items-center py-[0.5vw]'><img src='https://thriftly.s3.ap-south-1.amazonaws.com/tick.png'></img><h3 className='text-[#1A1A1A] pl-[1vw]'>Cost Recommendations</h3></div>
                </div>
                <button className='border-[0.1vw] w-[100%] p-[1vw] m-[1vw] border-solid border-[#9E77ED] text-[#9E77ED]'>Try for free</button>
              </div>              
              <div className='rounded-2xl border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#BFAFFF] p-[1vw] m-[1vw] max-w-xs py-[1vw] flex flex-col justify-center items-center'>
                <div className='p-[1vw]'>
                  <h3 className='text-[2vw]'>Pro $999 <span className='text-[1vw]'>/ month</span></h3>
                  <h4 className='text-[#667085] py-[0.5vw]'>for cloud billing upto $150k</h4>
                  <div className='border-[0.5px] border-solid'></div>
                </div>
                <h4 className='text-[#667085] py-[0.2vw]'>Everything in free plan plus</h4>
                <div className='p-[1vw]'>
                  <div className='flex items-center py-[0.5vw] '><img src='https://thriftly.s3.ap-south-1.amazonaws.com/tick.png'></img><h3 className='text-[#1A1A1A] pl-[1vw]'>Data Retention - 1 Years</h3></div>
                  <div className='flex items-center py-[0.5vw]'><img src='https://thriftly.s3.ap-south-1.amazonaws.com/tick.png'></img><h3 className='text-[#1A1A1A] pl-[1vw]'>SLA Guarantee</h3></div>
                  <div className='flex items-center py-[0.5vw]'><img src='https://thriftly.s3.ap-south-1.amazonaws.com/tick.png'></img><h3 className='text-[#1A1A1A] pl-[1vw]'>Standard Support</h3></div>
                  <div className='flex items-center py-[0.5vw]'><img src='https://thriftly.s3.ap-south-1.amazonaws.com/tick.png'></img><h3 className='text-[#1A1A1A] pl-[1vw]'>Manage unlimited cloud spend</h3></div>
                </div>
                <button className='border-[0.1vw] w-[100%] p-[1vw] m-[1vw] border-solid bg-[#9E77ED] text-[white]'>Subscribe now</button>
              </div>
              <div className='rounded-2xl border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#5566991c] p-[1vw] m-[1vw] max-w-xs py-[1vw] flex flex-col justify-center items-center'>
                <div className='p-[1vw]'>
                  <h3 className='text-[2vw]'>Enterprise Contact us</h3>
                  <h4 className='text-[#667085] py-[1vw]'>for cloud billing more than $150k</h4>
                  <div className='border-[0.8px] border-solid'></div>
                </div>
                <h4 className='text-[#667085] py-[0.2vw]'>Everything in pro plan plus</h4>
                <div className='border-[0.1vw] border-solid'></div>
                <div className='p-[1vw]'>
                <div className='flex items-center py-[0.5vw] '><img src='https://thriftly.s3.ap-south-1.amazonaws.com/tick.png'></img><h3 className='text-[#1A1A1A] pl-[1vw]'>Enterprise Security</h3></div>
                  <div className='flex items-center py-[0.5vw]'><img src='https://thriftly.s3.ap-south-1.amazonaws.com/tick.png'></img><h3 className='text-[#1A1A1A] pl-[1vw]'>Policy Based Governance</h3></div>
                  <div className='flex items-center py-[0.5vw]'><img src='https://thriftly.s3.ap-south-1.amazonaws.com/tick.png'></img><h3 className='text-[#1A1A1A] pl-[1vw]'>Intelligent Auto-Stopping (soon)Intelligent Auto-Stopping (soon)</h3></div>
                  <div className='flex items-center py-[0.5vw]'><img src='https://thriftly.s3.ap-south-1.amazonaws.com/tick.png'></img><h3 className='text-[#1A1A1A] pl-[1vw]'>custom Dashboard</h3></div>
                </div>
                <button className='border-[0.1vw] w-[100%] p-[1vw] m-[1vw] border-solid border-[#9E77ED] text-[#9E77ED]'>Contact sales</button>
              </div>
            </div>
          </div>
      </div>

      <div className='flex items-center flex-col'>
          <h2 className='text-[40px] leading-[50px] m-[1vw]'>Our Team</h2>
          <div className='flex flex-col'>
            <div className='flex items-center justify-evenly'>
              <div className='rounded-2xl border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#5566991c] p-[1vw] m-[1vw] max-w-xs py-[1vw] flex flex-col !min-h-[22vw]'>
                <img src='https://thriftly.s3.ap-south-1.amazonaws.com/karan.jpeg' className='m-[1vw] rounded-2xl'></img>
                <h3 className='px-[1vw]'>Karan Bhatia</h3>
                <p className='px-[1vw]'>COO - never out of words</p>              
              </div>

              <div className='rounded-2xl border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#5566991c] p-[1vw] m-[1vw] max-w-xs py-[1vw] flex flex-col !min-h-[22vw]'>
              <img src='https://thriftly.s3.ap-south-1.amazonaws.com/kavya.jpeg' className='m-[1vw] rounded-2xl'></img>
                <h3 className='px-[1vw]'>Kavya</h3>
                <p className='px-[1vw]'>CPO - Kind of product and data owner</p>
              
              </div>
              <div className='rounded-2xl border-[0.5px] border-solid border-[#E5E4E2] shadow-lg shadow-[#5566991c] p-[1vw] m-[1vw] max-w-xs py-[1vw] flex flex-col !min-h-[22vw]'>
                <img src='https://thriftly.s3.ap-south-1.amazonaws.com/karan.jpeg' className='m-[1vw] rounded-2xl'></img>
                <h3 className='px-[1vw]'>Karan</h3>
                <p className='px-[1vw]'>COO - never out of words</p>              
              </div>
            </div>
          </div>
      </div>

      <div className='border-[0.15vw] border-solid m-[4vw]'>
      </div>

      <div className='flex justify-between'>
        <div className='rounded-2xl border-[0.5px] border-solid border-[#E5E4E2] shadow-lg px-[4vw] flex flex-col justify-center items-center mx-[3vw] mb-[2vw]'>
          <h2 className='text-[40px] leading-[50px] m-[1vw]'>Get in touch!</h2>
          <Form
            layout="vertical"
            className="w-[38vw] flex flex-col items-center justify-center"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item label="Name" className='!w-[100%]'  name="name" rules={[{ required: true, message: 'name is required!' }]} >
              <Input 
                placeholder='Name'                
              />
            </Form.Item>
            <Form.Item label="Email" className='w-[100%]' name="email" rules={[{ required: true, message: 'email is required!' }]}>
              <Input 
                placeholder='Email'                
              />
            </Form.Item>
            <Form.Item label="Invite code" name="invite" className='w-[100%]'>
              <Input 
                placeholder='Invite code'                
              />
            </Form.Item>
            <Form.Item label="Message" name="message" className='w-[100%]' rules={[{ required: true, message: 'message is required!' }]}>
              <Input
                placeholder='Message'                                
              />
            </Form.Item>
            <Form.Item name="tc" valuePropName="checked" rules={[{ required: true, message: 'agree to our terms and conditions!' }]}>
              <Checkbox>I agree to Privacy Policy and Terms of Use</Checkbox>
            </Form.Item>
            <Form.Item className=''>
              <Button type="primary" htmlType="submit" className='bg-[#0047FF] text-[white] text-[1vw] px-[2vw] py-[1vw] flex justify-center items-center rounded-2xl'>
                Contact with us now 
              </Button >
            </Form.Item>
          </Form>

        </div>
        <img className='m-[4vw] w-[34vw]' src="https://thriftly.s3.ap-south-1.amazonaws.com/Frame+5.png" alt="" />
      </div>
    </>
    
  )
}

export default intro;
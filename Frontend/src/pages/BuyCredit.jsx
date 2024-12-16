import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const BuyCredit = () => {
  const {user,backendUrl,loadCreditsData,token,setShowLogin}=useContext(AppContext);
  const  naigate=useNavigate()

  const initPay=async(order)=>{
    const options={
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name:'Credits Payment',
      description:'Credits Payment',
      order_id :order.id,
      receipt_id: order.receipt,
      handler:async(response)=>{
        try {
          const {data}=await axios.post(backendUrl+'/api/user/verify-razor',response,{headers:{token}})
          if(data.success){
            loadCreditsData()
            naigate('/')
            toast.success('Credit Added')
          }
        } catch (error) {
          toast.error(error.message)
        }
      }
    }
    const rzp=new window.Razorpay(options)
    rzp.open()
  }

  const paymentRazorpay = async (planId) => {
    try {
        if (!user) {
            setShowLogin(true);
            return;
        }

        const { data } = await axios.post(
            `${backendUrl}/api/user/pay-razor`,
            { userId: user.id, planId },
            { headers: { token } }
        );

        if (data.success) {
            initPay(data.order);
        } else {
            toast.error(data.message);
        }
    } catch (error) {
        toast.error(error.message);
    }
};

  return (
    <motion.div className='min-h-[80vh] text-center pt-14 mb-10'
    initial={{opacity:0.2 , y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    >
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the Plan</h1>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item,index)=>(
          <div key={index} className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all'>
            <img src={assets.logo_icon} width={40}/>
            <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'> <span className='text-3xl font-medium'>₹{item.price} </span> / {item.credits} credits</p>
            <button onClick={()=>paymentRazorpay(item.id)} className='w-full border bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>{user ? 'Purchase' : 'Get Started'}</button>
          </div>
        ))}
      </div>
      
    </motion.div>
  )
}

export default BuyCredit
import React from "react";
import {  useDispatch, useSelector } from 'react-redux'
import {HabdleDisOpenModal } from "../store/SliceModalFilter";
import { RootState } from '../store/store';





export default function ModalBuscket(){
    let dispatch = useDispatch()
let state = useSelector((state:RootState)=>state.counter.value)

    return(
        <>
        <div className={`w-[100%] h-svh bg-black ${state?'z-50' :'z-0 '} ${!state?'opacity-0' :'opacity-50 '} transition duration-500 fixed `}>
        </div>
        <div className={` ${state? 'translate-y-[0%]':'translate-y-[150%]' } ${state? 'translate-x-[0%]':'translate-x-[-150%]' }  transition-transform top-[15%] right-[35%]  w-[40%] h-[70%] bg-[#332c38] fixed z-50 opacity-100  border-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 `} >


 <svg 
 onClick={()=>dispatch(HabdleDisOpenModal())}
 className="absolute md:rotate-45 top-[-5%] right-[-5%] cursor-pointer transition duration-500 hover:rotate-180" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
<path d="M30 4H18V18H4V30H18V44H30V30H44V18H30V4Z" fill="#332c38" stroke="#67e8f9" stroke-width="2" stroke-linejoin="round"/>
</svg>

<h1></h1>



        </div>
        </>
    )
}
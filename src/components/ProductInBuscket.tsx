import React from "react";
import {TransitionGroup, CSSTransition } from 'react-transition-group';
import '../index.css'
import IBackendObject from "../modle";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HandleAddProduct , HandleRemoveProduct} from "../store/sliceCountBuscet";
import { RootState } from "../store/store";

type PropTypes ={
    product:IBackendObject
        }

       
export default function ProductInBuscket({product}:PropTypes){

    let state = useSelector((state:RootState) => state)
    const [count, setCount ] = useState<number>(1)
    const  [show, setShow ] = useState(true)
    const nodeRef = useRef<HTMLDivElement>(null)


    const dispatch = useDispatch()



return(
    <>




<div  ref={nodeRef} className="flex " >

<div  className="flex w-[800px] h-[200px] items-center rounded border-[2px] border-cyan-300 pl-2 mb-5 relative ">
<svg
className=" absolute top-[-11%] right-[-3%] cursor-pointer "
onClick={()=>{
    dispatch(HandleRemoveProduct(product.id))
}}
  xmlns="http://www.w3.org/2000/svg"
  width="45"
  height="45"
  viewBox="0 0 24 24"
  fill="#FF1493"
  stroke="#FF1493"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>

<div className=" absolute bottom-[3%] right-[3%]  rounded text-center flex  justify-center bg-green  border-[2px]">
<button className=" icon relative w-[100px] h-[30px]  text-center flex  justify-center bg-violet-600 border-r-[2px]">купить</button>
<span className="w-[100px] h-[30px]  text-center flex flex-col justify-center bg-white">{product.price * count} $</span>
</div>
<img src={product.photo} alt={product.name} className="w-[30%] h-[80%] rounded border-[2px] border-cyan-300 p-2"/>
<div className="pl-5 flex w-[67%] justify-between">

<div className="flex-col ">
<p >{product.category}</p>
<h1 className="flex">{product.name}</h1>
</div>

<div className="flex flex-col items-center bg-white rounded">
<button 
onClick={()=>{

if(count>=99){
    setCount(99)
}else{
    setCount(count+1)
}
}}
className="icon w-[50px] h-[30px] border-[2px] rounded relative text-white bg-[#2e3646] hover:bg-violet-600 "> + </button>
<p>{count} шт.</p>
<button 
onClick={()=>{
    if(count<=1){
        setCount(1)
    }
    else{
    setCount(count-1)
    }
}}
className="icon w-[50px] h-[30px] border-[2px] rounded relative text-white bg-[#2e3646] hover:bg-violet-600"> - </button>
</div>
</div>

</div>

</div>



</>
        
    )
}
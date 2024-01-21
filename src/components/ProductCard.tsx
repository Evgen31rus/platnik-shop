import React, { useEffect } from "react";
import bigSale from '../img/bigSale.png'
import IBackendObject from "../modle";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HandleAddProduct, HandleRemoveProduct } from "../store/sliceCountBuscet";
import { HandleAddLikes } from "../store/sliceCountLikes";
import { RootState } from "../store/store";
import { CSSTransition } from 'react-transition-group';

type PropTypes ={
    product:IBackendObject
        }



export default function ProductCard({product}:PropTypes){

    const [isMouseOver ,setIsMouseOver] = useState(false)
    const[isOpenInfo, setIsOpenInfo] = useState(false)
    const[isAdd , setIsAdd]= useState(false)
    const[isLikes, setIsLickes] = useState(false)

    let HandleAddBuscket = ()=>{
isAdd? setIsAdd(false): setIsAdd(true)
    }

    let HandleIsOpenInfo=()=>{
        isOpenInfo?setIsOpenInfo(false):setIsOpenInfo(true)
    }

   let HandleVisibilityInfo = ()=>{
      setIsMouseOver(!isMouseOver)
           }




           const dispatch =useDispatch()
           const state = useSelector((state:RootState)=>state)

           useEffect(()=>{
               console.log(state.countBuscket.value)
           } , [HandleAddBuscket])

    return(
       
<div className="transition-[margin] duration-500 ease-in-out
   max-sm:w-[300px]
"            
   

 >

  
       
            <div  

            className={`relative text-white border-[2px] border-cyan-300 outline outline-offset-2 outline-pink-500 rounded box-border min-w-60 max-w-80 h-58 block mr-5  mb-5 flex justify-center flex-col p-5 overflow-hidden transition duration-300 ease-in-out hover:scale-110 `} >
            <div className='w-full  h-full bg-black  absolute opacity-30 m-[-20px] flex rounded z-0 '></div>
           
   
      <div id={product.id} className={` icon flex flex-col overflow-hidden rounded z-10 `} >
   <p className=''>
    <div className="flex justify-center">
    {product.category}
    {product.saleStatus? <img  src={bigSale} alt='sale' className="absolute top-0 left-0 w-[80px] h-[90px]"/>   : ''}
    
    </div>
    </p>
            <img src={product.photo} id={product.id} alt={product.category + ' ' + product.name} 
            className={`${!isMouseOver?'activeBlackIcon':'NotActiveBlackIcon'}  rounded w-11/12 m-auto mt-2 flex border-[2px] border-cyan-300 outline outline-offset-2 outline-pink-500 z-30 cursor-pointer transition duration-300 ease-in-out  `}  
            onMouseOver={HandleVisibilityInfo}
            onMouseDown={HandleVisibilityInfo}
       
            />
            <button 
      
            className={` ${isMouseOver?'btnInfoActive':'btnInfoNotActive'}  flex absolute z-30  icon flex m-auto border-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 w-4/11 justify-center mt-2 mb-2 p-2 z-20  ease-in transition duration-300 ease-in-out hover:bg-violet-600 tran hover:scale-110 `} 
            onClick={HandleIsOpenInfo} 

            >о товаре</button>
            <button className={` ${isMouseOver?'btnLikeActive':'btnLikeNotActive'}  flex absolute z-30  icon flex m-auto border-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 w-4/11 justify-center mt-2 mb-2 p-2 z-20  ease-in transition duration-300 ease-in-out hover:bg-violet-600 tran hover:scale-110 `} 
            onClick={()=>{
                dispatch(HandleAddLikes(product))
                setIsLickes(!isLikes)
            }}

            >
                {isLikes? 'В избранном':
                'Нравится'}</button>
         
       </div>
   
    <div className='info flex justify-around'><h3>{product.name}</h3> 
    
    <div>
        <span className={`${product.saleStatus? 'line-through text-black text-0.4' : ''}`}>{product.price} $</span>
        {
            product.sale>0? <span className="ml-2 ">{Number(product.price-(product.price*(product.sale/100))).toFixed(1)} $</span>:''
        }
    </div>
    
    </div>
   
            <div className='flex justify-around'>
           { isAdd?
            <button 
            onClick={()=>{
                dispatch(HandleRemoveProduct(product.id))
                HandleAddBuscket()
                
            }}
            className={`icon flex m-auto border-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 w-[70%] justify-center mt-2 mb-2 p-2 z-20  ease-in transition duration-300 ease-in-out hover:bg-violet-600  hover:scale-110  `} >
               товар добавлен</button> 
            :
            <button 
            onClick={()=>{
                dispatch(HandleAddProduct(product))
                HandleAddBuscket()
            }}
            className={`icon flex m-auto border-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 w-[70%] justify-center mt-2 mb-2 p-2 z-20  ease-in transition duration-300 ease-in-out hover:bg-violet-600  hover:scale-110  `} >
               в корзину</button> 
            }
            </div>
       
          </div>
          </div>
       
        
    )
}
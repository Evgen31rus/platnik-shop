import React from "react";
import IBackendObject from "../modle";


type PropTypes ={
    product:IBackendObject[]
        }


export default function DeliveryPages({product}:PropTypes){
return(
   <>

<div className="flex w-[100%] h-[500px] justify-center">

<h1 className="flex  text-black text-3xl items-center z-10">К сожалению, Вы не авторизованы</h1>

</div>
   </>

        
    )
}
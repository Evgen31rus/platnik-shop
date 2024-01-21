import React, { useEffect, useRef, RefObject } from "react";
import { CSSTransition } from 'react-transition-group';
import IBackendObject from "../modle";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { stat } from "fs";
import ProductInBuscket from "../components/ProductInBuscket";
import ProductError from "../components/ProductError";




export default function LikePage(){
let state = useSelector((state:RootState) => state)


 const functionCountLikes = ()=>{
   return state.countLikes.value
 }



return(
   <>
<div className="flex  pt-20 pl-5 justify-center m-auto">

<div className="flex flex-col">

{

state.countBuscket.value.length?
functionCountLikes().map((elem:IBackendObject)=>

   <ProductInBuscket  product={elem} />
   )
   :
   <ProductError/>

// state.countBuscket.value.length? 

// state.countBuscket.value.map(el=>
// <ProductInBuscket product={el}/>
// )
// :
// <ProductError/>

}
</div>
</div>

   </>

        
    )
}
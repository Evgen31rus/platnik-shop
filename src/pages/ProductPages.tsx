import React, { useEffect } from "react";
import IBackendObject from "../modle";
import ProductCard from "../components/ProductCard";
import HelpZone from "../components/HelpZone";
import ProductError from '../components/ProductError';
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

type PropTypes ={
    product:IBackendObject[]
        }


export default function ProductPages({product}:PropTypes){
   let state = useSelector((state:RootState) => state)
   let stateMin = useSelector((state:RootState) => state.switchFilterPrice.price.minPrice)
   let stateMax = useSelector((state:RootState) => state.switchFilterPrice.price.maxPrice)
 
return(
   <>
<HelpZone/>

   <div className='relative flex flex-wrap max-w-[1500px] justify-center m-auto'>  
{
 

product.filter(element => element.price>=stateMin && element.price<=stateMax).map(element => 
   <ProductCard product={element}/>
     ) 

     
}
</div>

   </>

        
    )
}
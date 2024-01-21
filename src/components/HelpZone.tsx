import React, { ChangeEvent, MouseEvent} from "react";
import {  useSelector, useDispatch,  } from 'react-redux'
import { HandleOpenModal } from '../store/SliceModalFilter'
import { RootState } from '../store/store';
import { useRef, useState , RefObject} from "react";
import backend from "../backend";
import { HandleInputMinDate, HandleInputMaxDate } from "../store/SliceFilter";


export default function HelpZone(){
   const [value, setValue] = useState<string>('');
   const [valueArray, setValueArray] = useState<string[]>([]);
    let dispatch = useDispatch()
    let state = useSelector((state:RootState) => state)
    let inputSearch = useRef() as RefObject<HTMLInputElement> | null
    let inputMin = useRef() as RefObject<HTMLInputElement> | null; 
    let inputMax = useRef() as RefObject<HTMLInputElement> | null; 

let stateMin =  useSelector((state:RootState)=>state.switchFilterPrice.price.minPrice)
let stateMax =  useSelector((state:RootState)=>state.switchFilterPrice.price.maxPrice)



return(

    <>
    <div className="flex-wrap flex justify-around max-w-[1500px] h-[200px] items-center m-auto
    max-sm:hidden
    ">
      <div className='flex w-[50%] h-[50px]  pr-1 items-center  border-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 
          max-sm:mt-10      '>
<div className="flex w-[70%] z-20">
<input 
ref={inputSearch}
value = {value}
onChange={(e:ChangeEvent<HTMLInputElement>)=>{
 setValue(e.currentTarget.value)

}}
type="search" name="" id="" 
className='w-[100%] h-[40px] ml-1 mr-2 pl-5 rounded outline-0 z-20 cursor-pointer relative
' />

<div className={` absolute ml-1 w-[34.56%] max-w-[34.56%] rounded min-h-[0px] max-h-[200px] mt-[-6px] bg-white overflow-hidden`}>

 {
  valueArray.length?
  
valueArray.map(el=>
  <ul>
    <li 
    onClick={(e:MouseEvent<HTMLLIElement>)=>{
      setValue((e.currentTarget.value).toString())
    }
     
    }
    className="p-2 cursor-pointer hover:bg-[#808080] w-[100%] h-[40px]">
      {el}
    </li>
  </ul>
  ):
  ''

  }
 

</div>

</div>
<button 
onClick={
()=>{
  setValueArray(current => [...current, value])
  setValue('')
  JSON.stringify(localStorage.setItem(value, value))
}

}
className='icon relative w-[30%] h-[40px] z-10 rounded hover:bg-violet-600 ease-in transition duration-300 ease-in-out'>Найти</button>
</div>

<div className="flex z-10 items-center">
<span className="pr-2">от</span>

<input 
ref={inputMin}
placeholder={stateMin.toString()}
onChange={(e: ChangeEvent<HTMLInputElement>)=>{
  const regEx = /[^\d\+]/g;

    if(Number(e.currentTarget.value.replace(regEx, ''))<0){
        e.currentTarget.value='0'
    }
    if(Number(e.currentTarget.value)>stateMax){
        e.currentTarget.value = stateMax.toString().replace(regEx, '')
    }
    else{
        dispatch(HandleInputMinDate(Number(e.currentTarget.value.replace(regEx, ''))))
    }
        
        
}}
type="text" name="" id=""  
className="w-[100px] h-[40px] pl-8  rounded " />


<span className="pl-2 pr-2">до</span>

<input 
ref={inputMax}
placeholder={stateMax.toString()}
onChange={(e: ChangeEvent<HTMLInputElement>)=>{
  const regEx = /[^\d\+]/g;
    if(Number(e.currentTarget.value.replace(regEx, ''))<0){
        e.currentTarget.value='0'
    }
    if(Number(e.currentTarget.value.replace(regEx, ''))>Math.max(...backend.map(el => el.price))){
        e.currentTarget.value =  Math.max(...backend.map(el => el.price)).toString().replace(regEx, '')
    }else{
        dispatch(HandleInputMaxDate(Number(e.currentTarget.value.replace(regEx, ''))))
    }
    
    
}}
type="text" name="" id="" className="w-[100px] h-[40px] pl-8  rounded " />
</div>


<button 
onClick={()=>dispatch(HandleOpenModal())}
className='icon justify-center items-center w-[40px] h-[40px]  flex border-[2px] rounded border-cyan-300 rounded-full outline outline-offset-2 outline-pink-500    ease-in transition duration-300 ease-in-out animate-bounce hover:bg-violet-600 tran hover:scale-110 '
  >
  
  <svg fill="#faf5ff" height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
	 viewBox="0 0 210.68 210.68" >
<path d="M205.613,30.693c0-10.405-10.746-18.149-32.854-23.676C154.659,2.492,130.716,0,105.34,0
	C79.965,0,56.021,2.492,37.921,7.017C15.813,12.544,5.066,20.288,5.066,30.693c0,3.85,1.476,7.335,4.45,10.479l68.245,82.777v79.23
	c0,2.595,1.341,5.005,3.546,6.373c1.207,0.749,2.578,1.127,3.954,1.127c1.138,0,2.278-0.259,3.331-0.78l40.075-19.863
	c2.55-1.264,4.165-3.863,4.169-6.71l0.077-59.372l68.254-82.787C204.139,38.024,205.613,34.542,205.613,30.693z M44.94,20.767
	C61.467,17.048,82.917,15,105.34,15s43.874,2.048,60.399,5.767c18.25,4.107,23.38,8.521,24.607,9.926
	c-1.228,1.405-6.357,5.819-24.607,9.926c-16.525,3.719-37.977,5.767-60.399,5.767S61.467,44.338,44.94,40.62
	c-18.249-4.107-23.38-8.521-24.607-9.926C21.56,29.288,26.691,24.874,44.94,20.767z M119.631,116.486
	c-1.105,1.341-1.711,3.023-1.713,4.761l-0.075,57.413l-25.081,12.432v-69.835c0-1.741-0.605-3.428-1.713-4.771L40.306,54.938
	C58.1,59.1,81.058,61.387,105.34,61.387c24.283,0,47.24-2.287,65.034-6.449L119.631,116.486z"/>
</svg>
  
  </button>
  </div>
    </>
)
}
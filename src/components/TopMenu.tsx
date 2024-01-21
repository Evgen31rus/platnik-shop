import React from "react";
import { MouseEvent } from "react";
import {  useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store';
import { HandleSwitchDeleveryPages, HandleSwitchMainPages, HandleSwitchProductPages, HandleSwitchBuscketPages, HandleSwitchLikesPages } from '../store/sliceSwitchPages';
import { HandleSwitchTeam } from "../store/SliceTeam";
import { useRef, FC, RefObject} from "react";


export default function TopMenu(){

let switchMainPage = useRef() as RefObject<HTMLAnchorElement> | null; 
let switchpProductPage = useRef() as RefObject<HTMLAnchorElement> | null;
let dispatch = useDispatch()
let state = useSelector((state:RootState) => state)
let countBuscket = state.countBuscket.value.length
let countLikes = state.countLikes.value.length

    return(
		
<>
<div className={` ${state.switchTeamSlice.nightTeam? 'bg-[#586784]': 'bg-[#2e3646]'} flex  justify-center w-[100%] min-h-[50px] fixed z-20 rounded border-b-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 z-50 items-center
max-sm:hidden
`}>
<div className={`flex flex-wrap justify-between max-w-[2500px] w-[800px] min-h-[50px]  items-center`}>


<div className={`flex max-w-[300px] justify-around  h-[90%] align-middle ${!state.switchTeamSlice.nightTeam? 'text-white' : 'text-black' } 
max-sm:flex-col
`} >
<a
ref={switchMainPage}
href='#'
onClick={(e:MouseEvent<HTMLAnchorElement>)=>{
	e.preventDefault()
	dispatch(HandleSwitchMainPages())}}
className={`cusor-pointer z-10 items-center ${state.switchPages.MainPages? ' border-b-[2px] border-cyan-300': ''}`}>Главная</a>

<a
ref={switchpProductPage}
href='#' 
onClick={(e:MouseEvent<HTMLAnchorElement>)=>{
	e.preventDefault()
	dispatch(HandleSwitchProductPages())}}
className={`cusor-pointer z-10 ${state.switchPages.ProductPages? ' border-b-[2px]  border-cyan-300': ''}`}>Товары</a>

<a
href='#'
onClick={(e:MouseEvent<HTMLAnchorElement>)=>{
	e.preventDefault()
	dispatch(HandleSwitchDeleveryPages())}}
className={`cusor-pointer z-10 ${state.switchPages.DeleveryPages? ' border-b-[2px]  border-cyan-300': ''}`}>Доставка</a>

</div>

<div 
onClick={()=>dispatch(HandleSwitchTeam())}
className={` relative w-[100px] bg-[#424e65] h-[40px] flex items-center  rounded-full border-[2px] rounded border-[#ec4899] cursor-pointer z-10  ${state.switchTeamSlice.nightTeam? 'justify-start': 'justify-end' } 
max-sm:absolute max-sm:left-2
`}>
	
<div className={`flex w-[38px] h-[38px] ${state.switchTeamSlice.nightTeam? 'bg-[#1f242e]' : 'bg-[#5c6b89]'} rounded-full border-[2px] border-[#ec4899]  rounded  transition-[ justify ] duration-150 ease-in-out`}>
</div>

</div>

<div className="flex  w-[250px] justify-between items-center  z-10 

">

<div className={`flex  justify-around  rounded items-center ${state.switchTeamSlice.nightTeam? 'bg-white' : 'bg-[#260b2d]'} pl-[2%] pr-[2%]
max-sm:hidden
`}>
<svg 
onClick={()=>dispatch(HandleSwitchBuscketPages())}
className="cursor-pointer z-10" xmlns="http://www.w3.org/2000/svg"  fill="#ec4899" width="40" height="40" viewBox="0 0 24 24">
  <path d="M5.50835165,12.5914912 C5.5072855,12.5857255 5.50631828,12.5799252 5.5054518,12.5740921 L4.28533671,5.25340152 C4.16478972,4.53011956 3.53900455,4 2.80574582,4 L2.5,4 C2.22385763,4 2,3.77614237 2,3.5 C2,3.22385763 2.22385763,3 2.5,3 L2.80574582,3 C3.99756372,3 5.0190253,3.84029234 5.25525588,5 L21.5,5 C21.8321894,5 22.0720214,5.31795246 21.980762,5.63736056 L19.980762,12.6373606 C19.9194332,12.8520113 19.7232402,13 19.5,13 L6.59023021,13 L6.71466329,13.7465985 C6.83521028,14.4698804 7.46099545,15 8.19425418,15 L19.5,15 C19.7761424,15 20,15.2238576 20,15.5 C20,15.7761424 19.7761424,16 19.5,16 L8.19425418,16 C6.97215629,16 5.92918102,15.1164674 5.72826937,13.9109975 L5.5083519,12.5914927 L5.50835165,12.5914912 Z M5.42356354,6 L6.42356354,12 L19.1228493,12 L20.837135,6 L5.42356354,6 Z M8,21 C6.8954305,21 6,20.1045695 6,19 C6,17.8954305 6.8954305,17 8,17 C9.1045695,17 10,17.8954305 10,19 C10,20.1045695 9.1045695,21 8,21 Z M8,20 C8.55228475,20 9,19.5522847 9,19 C9,18.4477153 8.55228475,18 8,18 C7.44771525,18 7,18.4477153 7,19 C7,19.5522847 7.44771525,20 8,20 Z M17,21 C15.8954305,21 15,20.1045695 15,19 C15,17.8954305 15.8954305,17 17,17 C18.1045695,17 19,17.8954305 19,19 C19,20.1045695 18.1045695,21 17,21 Z M17,20 C17.5522847,20 18,19.5522847 18,19 C18,18.4477153 17.5522847,18 17,18 C16.4477153,18 16,18.4477153 16,19 C16,19.5522847 16.4477153,20 17,20 Z"/>
</svg>

<span className="text-2xl pl-2 text-[#67e8f9]">{countBuscket}</span>

</div>

<div className={`flex  justify-around  rounded items-center ${state.switchTeamSlice.nightTeam? 'bg-white' : 'bg-[#260b2d]'} pl-[2%] pr-[2%]
max-sm:hidden
`}>
<svg 
onClick={()=>{
	dispatch(HandleSwitchLikesPages())
}}
version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" fill="#ec4899"
	 width="35px" height="40px" viewBox="0 0 128 128" enable-background="new 0 0 128 128" >
<g id="Heart">
	<g>
		<path d="M128,36c0-19.883-16.117-36-36-36C80.621,0,70.598,5.383,64,13.625C57.402,5.383,47.379,0,36,0C16.117,0,0,16.117,0,36
			c0,0.398,0.105,0.773,0.117,1.172H0C0,74.078,64,128,64,128s64-53.922,64-90.828h-0.117C127.895,36.773,128,36.398,128,36z
			 M119.887,36.938l-0.051,3.172c-2.652,24.742-37.203,60.523-55.84,77.273c-18.5-16.617-52.695-52-55.773-76.742l-0.109-3.703
			C8.102,36.523,8.063,36.109,8,35.656C8.188,20.375,20.676,8,36,8c8.422,0,16.352,3.875,21.754,10.625L64,26.43l6.246-7.805
			C75.648,11.875,83.578,8,92,8c15.324,0,27.813,12.375,27.996,27.656C119.941,36.078,119.898,36.5,119.887,36.938z"/>
	</g>
</g>
</svg>

<span className="text-2xl h-[100%] pl-2 text-[#67e8f9]">{countLikes}</span>
</div>
<a href="Sign_in" className="w-[45px] h-[45px] bg-white rounded-full mr-[10px]
max-sm:absolute max-sm:top-2 max-sm:right-2
"></a>

</div>


</div>
</div>
</>

    )
	
}
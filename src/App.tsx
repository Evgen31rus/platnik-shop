import React, { MouseEventHandler, useRef, useState , MouseEvent} from 'react';
import { createApi } from '@reduxjs/toolkit/query'
import './App.css';
import { CSSTransition } from 'react-transition-group';

import backend from './backend';
import BackendObject from './modle';
import ModalFilter from './components/ModalFilter';
import TopMenu from './components/TopMenu';
import ModalBuscket from './components/ModalBuscket';
import BuscketPage from './pages/BuscketPage';
import DeliveryPages from './pages/DeliveryPages'
import LikePage from './pages/LikePage';

import counterSlice from './store/SliceModalFilter'
import {  useSelector, useDispatch } from 'react-redux'

import { RootState } from './store/store';
import ProductPages from './pages/ProductPages';
import MainPages from './pages/MainPages';
import Footer from './components/Footer';
import { stat } from 'fs';
import BuscketPages from './pages/BuscketPage';
import { HandleSwitchDeleveryPages, HandleSwitchMainPages, HandleSwitchProductPages, HandleSwitchBuscketPages, HandleSwitchLikesPages } from './store/sliceSwitchPages';




function App() {

  let dispatch = useDispatch()
  let state = useSelector((state:RootState) => state)
  let countBuscket = state.countBuscket.value.length
  let countLikes = state.countLikes.value.length

  let props:BackendObject[] = backend;







  return (
   <div className={`w-100% h-100% ${!state.switchTeamSlice.nightTeam? 'bg-[#332c38]': 'bg-[#ac9fb6]' } relative`}>
      
                                       { /* this is modal  zone*/ }

<ModalBuscket/>


<ModalFilter/>


                                     { /* this is components  zone*/ }

<TopMenu/>



{state.switchPages.MainPages?<MainPages product={props}/>:''}
{state.switchPages.ProductPages?<ProductPages product={props}/>:''}
{state.switchPages.BuscketPages? <BuscketPage />: ''}
{state.switchPages.DeleveryPages? <DeliveryPages product={props} />: ''}
{state.switchPages.likesPages? <LikePage  />: ''} 

<div className={`hidden 
${state.switchTeamSlice.nightTeam? 'bg-[#586784]': 'bg-[#2e3646]'}
fixed flex justify-start w-[100%] h-[50px] fixed bottom-0 z-40 
max-sm:flex 
`}>

<div className="flex  w-[250px] h-[40px] justify-end items-center  z-10  rounded ">

<div className={`flex  justify-around  rounded items-center ${state.switchTeamSlice.nightTeam? 'bg-white' : 'bg-[#260b2d]'} pl-[2%] pr-[2%]
`}>
<svg 
onClick={()=>dispatch(HandleSwitchBuscketPages())}
className="cursor-pointer z-10" xmlns="http://www.w3.org/2000/svg"  fill="#ec4899" width="40" height="40" viewBox="0 0 24 24">
  <path d="M5.50835165,12.5914912 C5.5072855,12.5857255 5.50631828,12.5799252 5.5054518,12.5740921 L4.28533671,5.25340152 C4.16478972,4.53011956 3.53900455,4 2.80574582,4 L2.5,4 C2.22385763,4 2,3.77614237 2,3.5 C2,3.22385763 2.22385763,3 2.5,3 L2.80574582,3 C3.99756372,3 5.0190253,3.84029234 5.25525588,5 L21.5,5 C21.8321894,5 22.0720214,5.31795246 21.980762,5.63736056 L19.980762,12.6373606 C19.9194332,12.8520113 19.7232402,13 19.5,13 L6.59023021,13 L6.71466329,13.7465985 C6.83521028,14.4698804 7.46099545,15 8.19425418,15 L19.5,15 C19.7761424,15 20,15.2238576 20,15.5 C20,15.7761424 19.7761424,16 19.5,16 L8.19425418,16 C6.97215629,16 5.92918102,15.1164674 5.72826937,13.9109975 L5.5083519,12.5914927 L5.50835165,12.5914912 Z M5.42356354,6 L6.42356354,12 L19.1228493,12 L20.837135,6 L5.42356354,6 Z M8,21 C6.8954305,21 6,20.1045695 6,19 C6,17.8954305 6.8954305,17 8,17 C9.1045695,17 10,17.8954305 10,19 C10,20.1045695 9.1045695,21 8,21 Z M8,20 C8.55228475,20 9,19.5522847 9,19 C9,18.4477153 8.55228475,18 8,18 C7.44771525,18 7,18.4477153 7,19 C7,19.5522847 7.44771525,20 8,20 Z M17,21 C15.8954305,21 15,20.1045695 15,19 C15,17.8954305 15.8954305,17 17,17 C18.1045695,17 19,17.8954305 19,19 C19,20.1045695 18.1045695,21 17,21 Z M17,20 C17.5522847,20 18,19.5522847 18,19 C18,18.4477153 17.5522847,18 17,18 C16.4477153,18 16,18.4477153 16,19 C16,19.5522847 16.4477153,20 17,20 Z"/>
</svg>

<span className="text-2xl pl-2 text-[#67e8f9]">{countBuscket}</span>

</div>

<div className={`flex  justify-around  rounded items-center ${state.switchTeamSlice.nightTeam? 'bg-white' : 'bg-[#260b2d]'} pl-[2%] pr-[2%]`}>
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
</div>
</div>


<Footer/>


</div>

  );
}

export default App;

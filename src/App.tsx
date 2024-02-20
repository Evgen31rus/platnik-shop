import React, { MouseEventHandler, useRef, useState , MouseEvent, useEffect} from 'react';
import { createApi } from '@reduxjs/toolkit/query'
import './App.css';
import { CSSTransition } from 'react-transition-group';

import backend from './backend';
import BackendObject from './modle';
import ModalFilter from './components/ModalFilter';
import TopMenu from './components/TopMenu';
// import ModalBuscket from './components/ModalBuscket';
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
import { HandleSwitchTeam, switchTeamSlice } from './store/SliceTeam';
import { HandleswitchMobileMenu } from './store/sliceSwitchMobileMenu';


function App() {

  let dispatch = useDispatch()
  let state = useSelector((state:RootState) => state)
  let countBuscket = state.countBuscket.value.length
  let countLikes = state.countLikes.value.length
  let switchMobuleMenu = state.switchMobileMenu.switch

  let props:BackendObject[] = backend;







  return (
   <div className={`font-mono w-100% h-100%  `}
   id={`${!state.switchTeamSlice.nightTeam? 'dark-team': 'light-team' }`}
   >
      
                                       { /* this is modal  zone*/ }
{/* 
<ModalBuscket/> */}


<ModalFilter/>


                                     { /* this is components  zone*/ }

<TopMenu/>



{state.switchPages.MainPages?<MainPages product={props}/>:''}
{state.switchPages.ProductPages?<ProductPages product={props}/>:''}
{state.switchPages.BuscketPages? <BuscketPage />: ''}
{state.switchPages.DeleveryPages? <DeliveryPages product={props} />: ''}
{state.switchPages.likesPages? <LikePage  />: ''} 

<div 
onClick={()=>dispatch(HandleSwitchTeam())}
className={` fixed icon
${state.switchTeamSlice.nightTeam?'gradient-night-team':''}
bottom-[20%] left-[0.1%]  w-[100px] bg-[#424e65] h-[40px] flex items-center  rounded-full border-[2px] rounded border-[#ec4899] cursor-pointer z-10 animate-bounce`}
id={`box-shadow`}
>
  <svg id="Icons" xmlns="http://www.w3.org/2000/svg" fill={`${state.switchTeamSlice.nightTeam?'#fbec5d':''}`} viewBox="0 0 48 48"
  className={`w-[30%] z-10 left-[4%] absolute`}
  >
    
    <defs></defs><title>643-sun-with-face</title><g id="_Group_" data-name="&lt;Group&gt;"><ellipse id="_Ellipse_" data-name="&lt;Ellipse&gt;"  cx="24" cy="46.5" rx="11.5" ry="1.5"/><g id="_Group_2" data-name="&lt;Group&gt;"><circle id="_Ellipse_2" data-name="&lt;Ellipse&gt;"  cx="24" cy="24" r="13.5"/><path id="_Path_" data-name="&lt;Path&gt;"  d="M25.28,10.56a12.5,12.5,0,1,1-2.56,0,13.5,13.5,0,1,0,2.56,0Z"/><circle id="_Ellipse_3" data-name="&lt;Ellipse&gt;" cx="24" cy="24" r="13.5"/><path id="_Path_2" data-name="&lt;Path&gt;"  d="M25.5,3a1.5,1.5,0,0,0-3,0V6a1.5,1.5,0,0,0,3,0Z"/><path id="_Path_3" data-name="&lt;Path&gt;"  d="M10.21,8.09a1.5,1.5,0,0,0-2.12,2.12l2.12,2.12a1.5,1.5,0,0,0,2.12-2.12Z"/><path id="_Path_4" data-name="&lt;Path&gt;"  d="M3,22.5a1.5,1.5,0,0,0,0,3H6a1.5,1.5,0,0,0,0-3Z"/><path id="_Path_5" data-name="&lt;Path&gt;"  d="M8.09,37.79a1.5,1.5,0,0,0,2.12,2.12l2.12-2.12a1.5,1.5,0,0,0-2.12-2.12Z"/><path id="_Path_6" data-name="&lt;Path&gt;"  d="M22.5,45a1.5,1.5,0,0,0,3,0V42a1.5,1.5,0,0,0-3,0Z"/><path id="_Path_7" data-name="&lt;Path&gt;"  d="M37.79,39.91a1.5,1.5,0,0,0,2.12-2.12l-2.12-2.12a1.5,1.5,0,0,0-2.12,2.12Z"/><path id="_Path_8" data-name="&lt;Path&gt;" d="M45,25.5a1.5,1.5,0,0,0,0-3H42a1.5,1.5,0,0,0,0,3Z"/><path id="_Path_9" data-name="&lt;Path&gt;"  d="M39.91,10.21a1.5,1.5,0,0,0-2.12-2.12l-2.12,2.12a1.5,1.5,0,0,0,2.12,2.12Z"/><path id="_Path_10" data-name="&lt;Path&gt;"  d="M14,27c0,.55.67,1,1.5,1s1.5-.45,1.5-1-.67-1-1.5-1S14,26.45,14,27Z"/><g id="_Group_3" data-name="&lt;Group&gt;"><path id="_Path_11" data-name="&lt;Path&gt;"  d="M27.87,29.5a1,1,0,0,1,1,1.25,5,5,0,0,1-9.68,0,1,1,0,0,1,1-1.25Z"/><path id="_Path_12" data-name="&lt;Path&gt;"  d="M24,34.5a5,5,0,0,0,3.94-1.94A7.34,7.34,0,0,0,24,31.5a7.34,7.34,0,0,0-3.94,1.06A5,5,0,0,0,24,34.5Z"/></g><path id="_Path_13" data-name="&lt;Path&gt;"  d="M15,25a1.5,1.5,0,0,1,3,0"/><path id="_Path_14" data-name="&lt;Path&gt;" d="M34,27c0,.55-.67,1-1.5,1S31,27.55,31,27s.67-1,1.5-1S34,26.45,34,27Z"/><path id="_Path_15" data-name="&lt;Path&gt;"  d="M33,25a1.5,1.5,0,0,0-3,0"/><ellipse id="_Ellipse_4" data-name="&lt;Ellipse&gt;"  cx="24" cy="13.5" rx="4" ry="1"/></g></g></svg>
	
<div className={`flex w-[40%] h-[100%] absolute transition-all 
${state.switchTeamSlice.nightTeam? 'ml-[0%]': 'ml-[60%]'}
${state.switchTeamSlice.nightTeam? 'bg-[#00ffff]' : 'bg-[#000000]'}
 rounded-full border-[2px] border-[#ec4899]  rounded `}
id={`box-shadow`}
>
</div>
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 width={`35%`} height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" 
   className={`right-[2%] absolute`}>
<g>
	<path fill={`${state.switchTeamSlice.nightTeam?'':'#BFBFBF'}`} d="M16,29.5C8.556,29.5,2.5,23.444,2.5,16C2.5,8.556,8.556,2.5,16,2.5c7.444,0,13.5,6.056,13.5,13.5
		C29.5,23.444,23.444,29.5,16,29.5z"/>
</g>
<g>
	<path fill="#4D5152" d="M16,3c7.168,0,13,5.832,13,13c0,7.168-5.832,13-13,13C8.832,29,3,23.168,3,16C3,8.832,8.832,3,16,3 M16,2
		C8.268,2,2,8.268,2,16c0,7.732,6.268,14,14,14c7.732,0,14-6.268,14-14C30,8.268,23.732,2,16,2L16,2z"/>
</g>
<g>
	<path fill="#AAAAAA" d="M12.5,13C10.57,13,9,11.43,9,9.5S10.57,6,12.5,6S16,7.57,16,9.5S14.43,13,12.5,13z"/>
</g>
<g>
	<circle fill="#AAAAAA" cx="6" cy="14" r="1.5"/>
</g>
<g>
	<circle fill="#AAAAAA" cx="11" cy="18" r="2.5"/>
</g>
</svg>
</div>

<Footer/>

<div
className={`flex flex-col w-[60%] h-[100%] bg-[#586784] fixed top-[0%] z-50 transition-all  text-3xl font-black
${
  switchMobuleMenu?
  'flex ': 'translate-x-[-100%]'
}
`}
>
<div className=' flex pl-5 border-b-4 w-[90%] mb-2 pb-2 ml-2'>

<a href="Sign_in" className="w-[45px] h-[45px] bg-white rounded-full mr-1
max-sm:absolute max-sm:top-2 max-sm:right-2
"
id={`box-shadow`}
></a>
Мой профиль



</div>

  <div className='flex flex-col  w-[100%] translate-x-[20%] '>
<a
href='#'
onClick={(e:MouseEvent<HTMLAnchorElement>)=>{
	e.preventDefault()
	dispatch(HandleSwitchMainPages())
dispatch(HandleswitchMobileMenu())
}}
className={`cusor-pointer z-10  ${state.switchPages.MainPages? 'text-white': ''}  `}

>Главная</a>

<a

href='#' 
onClick={(e:MouseEvent<HTMLAnchorElement>)=>{
	e.preventDefault()
	dispatch(HandleSwitchProductPages())
  dispatch(HandleswitchMobileMenu())
}}
className={`cusor-pointer z-10  ${state.switchPages.ProductPages? 'text-white': ''} `}>Товары</a>

<a
href='#'
onClick={(e:MouseEvent<HTMLAnchorElement>)=>{
	e.preventDefault()
	dispatch(HandleSwitchDeleveryPages())
  dispatch(HandleswitchMobileMenu())
}}
className={`cusor-pointer z-10  ${state.switchPages.DeleveryPages? 'text-white': ''}  `}>Доставка</a>

</div>
</div>
</div>



  );
}

export default App;

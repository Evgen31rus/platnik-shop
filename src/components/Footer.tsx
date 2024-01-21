import React from "react";
import phone from '../img/phone.png'
import { useSelector } from "react-redux";
import { RootState , } from '../store/store';


export default function Footer(){
    let state = useSelector((state:RootState) => state)
return(
<>
<div className={`flex  flex-col w-100% min-h-[200px] ${state.switchTeamSlice.nightTeam? 'bg-[#586784]': 'bg-[#2e3646]'}  rounded border-t-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 `}>
<div className={` flex max-w-[2500px] justify-between
   max-sm:flex-col
`}>
<div className="flex t p-2
    max-sm:flex-col
">
<ul className="flex flex-col text-white pl-5 z-20">
    <p className="font-bold">Покупателям</p>
    <li><a href="#" className="hover:text-black text-sm">Как выбрать товар</a></li>
    <li><a href="#" className="hover:text-black text-sm">Оплата и доставка</a></li>
    <li><a href="#" className="hover:text-black text-sm">Обратная связь</a></li>
    <li><a href="#" className="hover:text-black text-sm">Покупайте как юрлицо</a></li>
    <li><a href="#" className="hover:text-black text-sm">О сервисе</a></li>
    <li><a href="#" className="hover:text-black text-sm">Участие в исследованиях</a></li>
    <li><a href="#" className="hover:text-black text-sm">Возвраты</a></li>
</ul>
<ul className="flex flex-col text-white pl-5 z-20">
<p className="font-bold">Продавцам</p>
    <li><a href="#" className="hover:text-black text-sm">Личный кабинет продавца</a></li>
    <li><a href="#" className="hover:text-black text-sm">Продавайте на Маркетеа</a></li>
    <li><a href="#" className="hover:text-black text-sm">Документация для партнёров</a></li>
    <li><a href="#" className="hover:text-black text-sm">Сайт для партнёров</a></li>

</ul>
<ul className="flex flex-col text-white pl-5 z-20">
    <p className="font-bold">Сотрудничество</p>
    <li><a href="#" className="hover:text-black text-sm">Новости компании</a></li>
    <li><a href="#" className="hover:text-black text-sm">Партнёрская программа</a></li>
    <li><a href="#" className="hover:text-black text-sm">Программа для блогеров</a></li>
    <li><a href="#" className="hover:text-black text-sm">Производителям</a></li>
    <li><a href="#" className="hover:text-black text-sm">Пункт выдачи заказов</a></li>
    <li><a href="#" className="hover:text-black text-sm">Маркет нанимает</a></li>
    
</ul>
</div>

<div className=" m-2 w-[130px] bg-black rounded-[33px] relative">
    <div className="absolute top-[8%] m-4 w-[77%] h-[66%] bg-[#2e3646] ">

        <a href="#" className="flex icon m-auto justify-center w-[80px] text-xs mt-10 text-[#67e8f9] rounded border-[1px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 cursor-pointer relative hover:bg-violet-600 ">PlatnikShop</a>
        <div className="absolute top-[45%] left-[60%] w-[10px] h-[10px] rounded-full bg-[#00FFFF]"></div>

<div className="absolute top-[50%] left-[5%] w-[20px] h-[20px] rounded-full bg-[#FF00FF]"></div>
<div className="absolute left-[90%] w-[10px] h-[10px] rounded-full bg-[#FF00FF]"></div>
<div className="absolute top-[3%] left-[50%] w-[30px] h-[30px] rounded-full bg-[#FF00FF]"></div>
<div className="absolute top-[56%] left-[60%] w-[10px] h-[10px] rounded-full bg-[#FF00FF]"></div>
<div className="absolute top-[7%] left-[90%] w-[10px] h-[10px] rounded-full bg-[#FF00FF]"></div>
<div className="absolute top-[68%] left-[40%] w-[20px] h-[20px] rounded-full bg-[#00FFFF]"></div>
<div className="absolute top-[85%] left-[80%] w-[10px] h-[10px] rounded-full bg-[#00FFFF]"></div>
    </div>
<img src={phone} alt="" className="  flex w-[100%] "/>

</div>
<div className="flex flex-col w-[200px] h-[100%] justify-center items-center">
<p className="text-xs text-center">скачай наше приложение и получи промокод на скидку 10%</p>
</div>


</div >
<div className="flex w-[100%] h-[50px] justify-center bg-[#9b969c]  pr-5">
    <div className="flex max-w-[2500px] w-[1000px]  h-[50px] justify-between items-center text-xs">
    <div className="flex w-[30%] justify-between pl-5 ">
    <a href="#" >Статистика</a>
    <a href="#" >Пользовательское соглашение</a>
    </div>
<p>© 2024  ООО «PlatnicShop»</p>
</div>
</div>
</div>
</>

    )
	
}
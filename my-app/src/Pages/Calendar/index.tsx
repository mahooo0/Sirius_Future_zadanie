import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Style from '../Calendar/Calendar.module.css'
import StrelkaIcon from '../../img/svg/Strelka.svg'
import QuestionsIcon from '../../img/CustemSvg/Questions';
import WeeklyCalendar from '../../components/Calendar';
function Calendar() {
   
    const {body,HeaderButtom,Sellect,SwiperSEction,tuday,icon}=Style
    
    return (
        
        <div>
         <Layout active={false}>
            <div className={body}>
                <div className={HeaderButtom}>
                <select  className={Sellect}>
                    <option >Выбрать предмет</option>
                    <option >variant1</option>
                    <option >variant2</option>
                    <option >variant3</option>
                </select>
                    <button>Изменить расписание</button>
                </div>
            
            <WeeklyCalendar
           
            />
            </div>
            
            </Layout> 
        </div>
    );
}

export default Calendar;
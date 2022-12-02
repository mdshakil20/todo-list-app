import React, { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { AiFillDelete } from "react-icons/ai";
import { BsBookmarkPlusFill } from "react-icons/bs";
import allData from '../../demoData.json';

const CompletedTask = () => {
    //delete button handler
    const handleDelete = (name) => {
        window.confirm(`Are you sure to delete " ${name} " ?`);
    }

    return (
        <div className='my-2 mx-2'>
            {
                allData.map((data, i) =>

                    //check the task completed or not
                    data.isCompleted == 'yes' &&
                    <div key={i} className=' flex justify-around md:justify-around items-center mt-3 w-full text-lg bg-white shadow-xl border-1 rounded-lg border-slate-400'>

                        {/* ----- task date show part ---- */}
                        <div className='md:flex ml-2 w-14 md:w-1/4 md:ml-5 font-semibold '>
                            <p className='text-center pl-2 text-blue-400'>{data.date.substring(4, data.date.indexOf(','))}</p>
                            <p className='text-center pl-2'> {data.date.slice(0, 3)} </p>
                            <p className='text-center pl-2'> {data.date.slice(-4)}</p>
                        </div>

                        {/* -------- task title show part  --------- */}
                        <div className='flex items-center justify-start font-semibold w-56 md:w-1/2 pl-2'>
                            {data.taskTitle}
                            {
                                data.isMostPriorty == 'yes' &&
                                <div className="badge badge-warning ml-2 text-sm">prioritize</div>
                            }
                        </div>

                        {/* --priorty button-- */}
                        <div className='block  md:flex md:justify-end py-3 w-12 md:w-1/4'>
                            {
                                data.isMostPriorty == 'yes' &&
                                <button className='block p-2 ml-1 tooltip ' data-tip="Mark as Most Priorty"><BsBookmarkPlusFill size={22} color='DodgerBlue' /></button>
                            }

                            {/* --delete button-- */}
                            <button className='block p-2 ml-1 tooltip ' onClick={() => handleDelete(data.taskTitle)} data-tip="Delete"><AiFillDelete size={22} color='Tomato' /></button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default CompletedTask;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import allData from '../../demoData.json'
// import { FaCheckCircle, FaEdit, FaGratipay } from "react-icons/fa";
// import { AiFillDelete } from "react-icons/ai";
// import { BsBookmarkPlusFill } from "react-icons/bs";

// const CompletedTaskList = () => {

//     //delete button handler
//     const handleDelete = (name) => {
//         window.confirm(`Are you sure to delete " ${name} " ?`);
//     }

//     return (
//         <div>
//             <div>
//                 {
//                     allData.map((data, i) =>

//                         //check the task completed or not
//                         data.isCompleted == 'yes' &&
//                         <div key={i} className=' flex justify-around md:justify-around items-center mt-3 w-full text-lg bg-white shadow-xl border-1 rounded-lg border-slate-400'>

//                             {/* ----- task date show part ---- */}
//                             <div className='md:flex ml-2 w-14 md:w-1/4 md:ml-5 font-semibold '>
//                                 <p className='text-center pl-2 text-blue-400'>{data.date.substring(4, data.date.indexOf(','))}</p>
//                                 <p className='text-center pl-2'> {data.date.slice(0, 3)} </p>
//                                 <p className='text-center pl-2'> {data.date.slice(-4)}</p>
//                             </div>

//                             {/* -------- task title show part  --------- */}
//                             <div className='flex items-center justify-start font-semibold w-56 md:w-1/2 pl-2'>
//                                 {data.taskTitle}
//                                 {
//                                     data.isMostPriorty == 'yes' &&
//                                     <div className="badge badge-warning ml-2 text-sm">prioritize</div>
//                                 }
//                             </div>

//                             {/* --priorty button-- */}
//                             <div className='block  md:flex md:justify-end py-3 w-12 md:w-1/4'>
//                                 {
//                                     data.isMostPriorty == 'yes' &&
//                                     <button className='block p-2 ml-1 tooltip ' data-tip="Mark as Most Priorty"><BsBookmarkPlusFill size={22} color='DodgerBlue' /></button>
//                                 }

//                                 {/* --delete button-- */}
//                                 <button className='block p-2 ml-1 tooltip ' onClick={() => handleDelete(data.taskTitle)} data-tip="Delete"><AiFillDelete size={22} color='Tomato' /></button>
//                             </div>
//                         </div>
//                     )
//                 }
//             </div>

//         </div>
//     );
// };

// export default CompletedTaskList;



import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaCheckCircle, FaEdit, FaGratipay } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { BsBookmarkPlusFill } from "react-icons/bs";
import allData from '../../demoData.json';



const TaskList = () => {
     //declare state of the selected value for editing
    const [taskDate, setTaskDate] = useState('');
    const [taskTitle, setTaskTitle] = useState('');

    //delete button handler
    const handleDelete = (name) => {
        window.confirm(`Are you sure to delete " ${name} " ?`);
    }
    

    //for selected data assigning
    const findDataForEdit = (info) => {
        setTaskDate(info.date);
        setTaskTitle(info.taskTitle);

    }
    return (
        <div className='my-5'>
            <Tabs >
                <TabList>
                    <Tab>Uncompleted</Tab>
                    <Tab>Completed</Tab>
                </TabList>
                <TabPanel>
                    <div className=' my-2 mx-2'>
                        {
                            allData.map((data, i) =>
                                data.isCompleted != 'yes' &&
                                <div key={i} className=' flex justify-around md:justify-around items-center mt-3 w-full text-lg bg-white shadow-xl border-1 border-slate-400 rounded-lg'>

                                    {/* ----- task date show part ---- */}
                                    <div className='md:flex ml-2 w-14 md:w-1/4 md:ml-5 font-semibold '>
                                        <p className='pl-2 text-blue-400'>{data.date.substring(4, data.date.indexOf(','))}</p>
                                        <p className='pl-2'> {data.date.slice(0, 3)} </p>
                                        <p className='pl-2'> {data.date.slice(-4)}</p>
                                    </div>

                                    {/* -------- task title show part  --------- */}
                                    <div className='flex items-center justify-start font-semibold w-56 md:w-1/2 pl-2'>
                                        {data.taskTitle}
                                        {
                                            data.isMostPriorty == 'yes' &&
                                            <div className="badge badge-warning ml-2 text-sm">prioritize</div>
                                        }
                                    </div>

                                    {/* --------- action buttons part --------- */}

                                    {/* --priorty button-- */}
                                    <div className='block  md:flex md:justify-end py-3 w-12 md:w-1/4'>
                                        {
                                            data.isMostPriorty != 'yes' &&
                                            <button className='block p-2 ml-1 tooltip ' data-tip="Mark as Most Priorty"><BsBookmarkPlusFill size={22} color='DodgerBlue' /></button>
                                        }
                                        {/* --complete button-- */}
                                        <button className='block p-2 ml-1 tooltip ' data-tip="Mark as Complete"><FaCheckCircle size={22} color='LimeGreen' /></button>
                                        {/* --edit button-- */}
                                        <label className='block p-2 ml-1 tooltip ' onClick={() => findDataForEdit(data)} htmlFor="my-modal" data-tip="Edit"><FaEdit size={22} color='DeepSkyBlue' /></label>

                                        {/* ------ Modal for edit ----- */}
                                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box">
                                                <input type="text" Value={taskDate} className="input input-bordered w-full" />
                                                <input type="text" Value={taskTitle} className="input input-bordered mt-3 w-full" />

                                                <div className="modal-action">
                                                    {/* ----------  edit button ---------- */}
                                                    <button className="btn bg-blue-400 hover:bg-blue-600">Edit</button>

                                                    <label htmlFor="my-modal" className="btn">Cencel</label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* --delete button-- */}
                                        <button className='block p-2 ml-1 tooltip ' onClick={() => handleDelete(data.taskTitle)} data-tip="Delete"><AiFillDelete size={22} color='Tomato' /></button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
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
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TaskList;
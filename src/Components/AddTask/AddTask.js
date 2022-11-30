import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const AddTask = () => {
    const [selected, setSelected] = useState(new Date());
    const [showCalender, setShowCalender] = useState(false);
    const date = format(selected, 'PP');

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <div className='w-full'> 
            {/* ---------website title-------- */}
            <h2 className='my-5 text-center font-bold text-blue-400 text-2xl'>Welcome to ToDo List App</h2>

            <form onSubmit={handleSubmit}>
                <div className='flex justify-between items-center border-2 border-slate-200 rounded-lg shadow-lg w-full '>
                    <input type="text" placeholder="Add New Task" className="input input-ghost text-lg focus:outline-0" />
                    <div className=' flex justify-between items-center'>
                        <p  className='px-2 hidden md:block'>Date: <span className='font-semibold text-blue-400'>{date}</span> </p>
                        <span onClick={() => setShowCalender(true)}><FaCalendarAlt className='mx-2' size={18} /></span>
                        <button className="btn bg-blue-500 hover:bg-blue-600 border-0  rounded-none">Submit</button>
                    </div>
                
                </div>

            </form>
            {
                //condition : if user click on calendar icon
                showCalender &&
                <div className='w-full flex justify-center'>
                    <DayPicker
                        className='w-fit p-2 bg-white shadow-lg'
                        mode="single"
                        selected={selected}
                        onSelect={(selected) => {
                            if (selected) {
                                setSelected(selected);
                            }
                            //after selecting a date, the daypicker not displayed
                            setShowCalender(false)
                        }}
                    />
                </div>
            }
        </div>
    );
};

export default AddTask;
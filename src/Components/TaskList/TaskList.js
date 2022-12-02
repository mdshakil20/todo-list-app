import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaCheckCircle, FaEdit, FaGratipay } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { BsBookmarkPlusFill } from "react-icons/bs";
import allData from '../../demoData.json';
import UncompletedTask from '../UncompletedTask/UncompletedTask';
import CompletedTask from '../CompletedTask/CompletedTask';


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
                    <UncompletedTask></UncompletedTask>
                </TabPanel>
                <TabPanel>
                    <CompletedTask></CompletedTask>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TaskList;
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import AddTask from '../Components/AddTask/AddTask';

const Main = () => {

    return (
        <div>
            <AddTask></AddTask>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
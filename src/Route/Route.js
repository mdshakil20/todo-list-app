import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layout/Main";
import TaskList from "../Components/TaskList/TaskList";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
        {
            path: '/',
            element: <TaskList></TaskList>
        }
        ]
    }
]);

export default router;

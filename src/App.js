import logo from './logo.svg';
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import { Link, RouterProvider } from 'react-router-dom';
import router from './Components/Route/Route';

function App() {

  return (
    <div className='mx-auto my-3 md:my-5 md:w-3/4 lg:1/2 max-w-screen-lg'>
      <RouterProvider router={router}></RouterProvider >
    </div>
      
      

  );
}

export default App;

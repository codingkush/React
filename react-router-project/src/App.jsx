import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Courses from './components/Courses';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
import NotFound from './components/NotFound';


//1- import createBrowserRouter
//2- create routes
//3- provide router to RouterProvider that gives the context of routes to Application to load the pages  


// Note:--
// Whenever you define a dynamic route parameter in the path using :paramName, 
// React Router automatically makes it available inside your component via useParams().

// Important -> 
// Route param → part of the URL path, uses : in route, accessed with useParams().
// Query param → comes after ?, accessed with useSearchParams().

// Nested child routes should use relative paths, not starting with /.
// Use <Outlet /> in the parent component to render the child routes. Ex: use in dashboard component

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
         <Navbar/>
         <Home/>
      </div>
    },
    {
      path:"/about",
      element:
      <div>
         <Navbar/>
         <About/>
      </div>
    },
    {
      path:"/dashboard",
      element:
      <div>
         <Navbar/>
         <Dashboard/>
      </div>,
      children:[
        {
          path:"courses",
          element: <Courses/>
        },
        {
          path:"mock-tests",
          element: <MockTest/>
        },
        {
          path:"reports",
          element: <Reports/>
        }
      ]
    },
    {
      path:"/student/:id",
      element: 
      <div>
         <Navbar/>
         <ParamComp/>
      </div>
    },
    {
      path:"*",
      element: 
      <NotFound/>
    }
  ]
);


function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

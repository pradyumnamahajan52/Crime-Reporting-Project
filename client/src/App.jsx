import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Screens/Error";
import RootLayout from "./Layout/RootLayout";
import Home from "./Screens/Home";
import AdminLayout from "./Layout/AdminLayout";
import Dashboard from "./Screens/Admin/Dashboard";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import NotFound from "./Screens/NotFound";
import FeedbackForm from "./Screens/FeedBackForm";
import Report from "./Screens/Citizen/Reports"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    id: "root",
    children: [
      {
        index: true,
        element: <Home />,
      }, 
      {
        path: "about",
        element: <About />,
      },
      {
        path:"contact",
        element: <Contact />
      },
     
      {
        path:"feedback",
        element: <FeedbackForm />
      },
     
      
      
    ],
  },


  
   
    {
      path:"*",
      element: <NotFound />
    },


  {   
    path: "user",
    errorElement: <Error />,
    id: "user",
    children: [
    {
      path:"login",
      element: <Login />
    },
    {
      path:"register",
      element: <Register />
    },
    {
      path:"reports",
      element: <Report />
    }
  ]
  },
  {
    path: "admin",
    errorElement: <Error />,
    element: <AdminLayout/>,
    id: "admin",
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  }
  
])


function App() {
  return <RouterProvider router={router} />
}

export default App;

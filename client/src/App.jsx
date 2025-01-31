import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Screens/Error";
import RootLayout from "./Layout/RootLayout";
import Home from "./Screens/Home";
import AdminLayout from "./Layout/AdminLayout";
import Dashboard from "./Screens/Admin/Dashboard";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import PoliceLayout from "./Layout/PoliceLayout";
import Sidebar from "./Components/Police/Sidebar";
import Feedback from "./Components/Police/Feedback";


import AdminUsers from "./Screens/Admin/Users";
import AdminProfile from "./Screens/Admin/Profile";
import AdminCrimeReports from "./Screens/Admin/CrimeReports";
import AdminCrimeCategory from "./Screens/Admin/CrimeCategory";
import AdminPoliceStation from "./Screens/Admin/PoliceStation";
import AdminFeedback from "./Screens/Admin/Feedback";
import AdminAuditLogs from "./Screens/Admin/AuditLogs";
import NewPoliceStation from "./Screens/Admin/NewPoliceStation";

import Login from "./Screens/Login";
import Register from "./Screens/Register";
import NotFound from "./Screens/NotFound";
import FeedbackForm from "./Screens/FeedBackForm";
import UpdatePoliceStation from "./Screens/Admin/UpdatePoliceStation";
import Reports from "./Screens/Citizen/Reports"


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    id: "root",
    children: 
    [
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
      element: <Reports />
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
      {
        path:"users",
        element: <AdminUsers />,
      },
      {
        path:"profile",
        element: <AdminProfile />,
      },
      {
        path:"crime-report",
        element: <AdminCrimeReports />,
      },
      {
        path:"crime-category",
        element: <AdminCrimeCategory />,
      },
      {
        path:"new-police-station",
        element: <NewPoliceStation />,
      },
      {
        path:"update-police-station/:id",
        element: <UpdatePoliceStation />,
      },
      {
        path:"police-station",
        element: <AdminPoliceStation />,
      },
      {
        path:"feedback",
        element: <AdminFeedback />,
      },
      {
        path:"audit-logs",
        element: <AdminAuditLogs />,
      },
    ],
  },
  {
    path: "police",
    errorElement: <Error/>,
    element: <PoliceLayout/>,
    id: "police",
    children: [
      {
        index: true,
        errorElement: <Error/>,
        element: <Dashboard/>
      },
      {
        path: "feedback",
        element: <Feedback/>
      }
    ],
  },

  }
  
])


function App() {
  return <RouterProvider router={router} />
}

export default App;

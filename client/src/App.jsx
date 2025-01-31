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
      }
    ],
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
])


function App() {
  return <RouterProvider router={router} />
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Screens/Error";
import RootLayout from "./Layout/RootLayout";
import Home from "./Screens/Home";
import AdminLayout from "./Layout/AdminLayout";
import Dashboard from "./Screens/Admin/Dashboard";
import About from "./Screens/About";
import Contact from "./Screens/Contact";

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
])


function App() {
  return <RouterProvider router={router} />
}

export default App;

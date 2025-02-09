import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Screens/Error";
import RootLayout from "./Layout/RootLayout";
import Home from "./Screens/Home";
import AdminLayout from "./Layout/AdminLayout";
import AdminDashboard from "./Screens/Admin/Dashboard";
import Aboutus from "./Screens/Aboutus";
import Contact from "./Screens/Contact";
import PoliceLayout from "./Layout/PoliceLayout";





import AdminUsers from "./Screens/Admin/Users";
import AdminProfile from "./Screens/Admin/Profile";
import AdminCrimeReports from "./Screens/Admin/CrimeReports";
import AdminCrimeCategory from "./Screens/Admin/CrimeCategory";
import AdminPoliceStation from "./Screens/Admin/PoliceStation";
import AdminFeedback from "./Screens/Admin/Feedback";
import AdminAuditLogs from "./Screens/Admin/AuditLogs";
import NewPoliceStation from "./Screens/Admin/NewPoliceStation";
import UserProfile from "./Screens/User/UserProfile";

import Register from "./Screens/Register";
import NotFound from "./Screens/NotFound";
import FeedbackForm from "./Screens/FeedBackForm";
import UpdatePoliceStation from "./Screens/Admin/UpdatePoliceStation";

import Reports from "./Screens/Citizen/Reports"
import PoliceProfile from "./Screens/Police/Profile";

import PoliceDashboard from "./Screens/Police/Dashboard";
import UserLogin from "./Screens/User/UserLogin";
import { LoginAction } from "./action/user/LoginAction";
import { LogoutAction } from "./action/user/LogoutAction";
import { loader as loadAuditLog } from "./loader/admin/AuditLogLoader";
import { loader as loadAdminFeedback } from "./loader/admin/FeedbackLoader";
import { loader as loadAdminDashboard } from "./loader/admin/DashboardLoader";
import { loader as loadAdminUsers } from "./loader/admin/UsersLoader";

import { loader as loadAdminUserDetails } from "./loader/admin/UserDetailsLoader";
import { loader as loadPoliceStations } from "./loader/admin/PoliceStationLoader";
import { loader as loadAdminCrimeReports } from "./loader/admin/CrimeReportsLoader";
import {loader as loadPoliceDetails} from './loader/Police/LoadPoliceDetails';
import { loader as loadAdminCrimeCategory } from "./loader/admin/CrimeCategoryLoader";
 // citizen
import { loader as loadCrimeCategory} from "./loader/Crime/CrimeCategory";
import {loader as loadReportDetails} from "./loader/Crime/ReportDetailsLoader";
import { loader as loadCrimeStatus } from "./loader/citizen/CrimeStatusLoader";

import "./App.css";
import {
  checkAdminAuthLoader,
  checkCitizenAuthLoader,
  checkPoliceAuthLoader,
} from "./action/user/Auth";
import PoliceFeedback from "./Screens/Police/PoliceFeedback";
import { UserProfileAction } from "./action/admin/UserProfileAction";
import { NewPoliceStationAction } from "./action/admin/NewPoliceStationAction";
import { newCrimeReportAction } from "./action/crime/newCrimeReportAction";
import { updatePoliceStationAction } from "./action/admin/UpdatePoliceStationAction";
import { ToastContainer } from "react-toastify";
import CrimeStatus from "./Screens/Citizen/CrimeStatus";
// import About from "./Screens/About";

import About from "./Screens/About";
import CrimeReportsDetail from "./Screens/Citizen/ReportsDetail";


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
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "citizen",
    errorElement: <Error />,
    element: <RootLayout />,
    id: "citizen",
    loader: checkCitizenAuthLoader,
    children: [
      {
        path: "feedback",
        element: <FeedbackForm />,
      },

      {
        path: "crimestatus",
        element: <CrimeStatus />,
        loader:loadCrimeStatus,
      },

      {
        path: "reports",
        element: <Reports />,
        loader: loadCrimeCategory,
        action: newCrimeReportAction
      },{
        path: "report-details/:id",
        element: <CrimeReportsDetail/>,
        loader: loadReportDetails
      },
      {
        index: true,
        element: <UserProfile />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },

  {
    path: "user",
    errorElement: <Error />,
    id: "user",
    children: [
      {
        path: "login",
        element: <UserLogin />,
        action: LoginAction,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },

      { path: "logout", action: LogoutAction },
    ],
  },
  {
    path: "admin",
    errorElement: <Error />,
    element: <AdminLayout />,
    loader: checkAdminAuthLoader,
    id: "admin",
    children: [
      {
        index: true,
        element: <AdminDashboard />,
        loader: loadAdminDashboard,
      },
      {
        path: "users",
        element: <AdminUsers />,
        loader: loadAdminUsers,
      },
      {
        path: "profile",
        element: <AdminProfile />,
        loader: loadAdminUserDetails,
        action: UserProfileAction,
      },
      {
        path: "crime-report",
        element: <AdminCrimeReports />,
        loader:loadAdminCrimeReports
      },
      {
        path: "crime-category",
        element: <AdminCrimeCategory />,
        loader:loadAdminCrimeCategory
      },
      {
        path: "new-police-station",
        element: <NewPoliceStation />,
        action: NewPoliceStationAction,
      },
      {
        path: "update-police-station/:id",
        element: <UpdatePoliceStation />,
        loader: loadPoliceStations,
        action: updatePoliceStationAction,
      },
      {
        path: "police-station",
        element: <AdminPoliceStation />,
        loader: loadPoliceStations,
      },
      {
        path: "feedback",
        element: <AdminFeedback />,
        loader: loadAdminFeedback,
      },
      {
        path: "audit-logs",
        element: <AdminAuditLogs />,
        loader: loadAuditLog,
      },
    ],
  },
  {
    path: "police",
    errorElement: <Error />,
    element: <PoliceLayout />,
    id: "police",
    loader: checkPoliceAuthLoader,
    children: [
      {
        index: true,
        errorElement: <Error />,
        element: <PoliceDashboard />,
      },
      {
        path: "feedback",
        element: <PoliceFeedback />,
      },
      {
        path:"profile",
        element: <PoliceProfile/>,
        loader: loadPoliceDetails,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;

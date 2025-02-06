import { useLoaderData } from "react-router-dom";
import Grid from "../../Components/Admin/Dashboard/Grid";
import TopBar from "../../Components/Dashboard/Topbar/TopBar";

function Dashboard() {
  const { dashboardData } = useLoaderData(); // Fetch data from the loader
  const dashboardInfo = dashboardData || []; // Handle undefined feedback data

  return (
    <>
      <TopBar rightButton="" />
      <Grid dashboardInfo={dashboardInfo} />
    </>
  );
}

export default Dashboard;

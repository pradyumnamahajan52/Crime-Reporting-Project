import { Await, useLoaderData } from "react-router-dom";
import Grid from "../../Components/Admin/Dashboard/Grid";
import TopBar from "../../Components/Dashboard/Topbar/TopBar";
import { Suspense } from "react";
import Spinner from "../../Components/Spinner";

function Dashboard() {
  const { dashboardData } = useLoaderData(); // Fetch data from the loader


  return (
    <>
      <TopBar rightButton="" />
      <Suspense fallback={<Spinner />}>
        <Await resolve={dashboardData}>
          {(dashboardInfo) => <Grid dashboardInfo={dashboardInfo} />}
        </Await>
      </Suspense>
    </>
  );
}

export default Dashboard;

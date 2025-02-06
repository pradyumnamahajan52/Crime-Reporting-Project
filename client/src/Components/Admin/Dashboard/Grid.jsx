
import Card from "./Card";

const Grid = ({dashboardInfo}) => {
  console.log('====================================');
  console.log(dashboardInfo);
  console.log('====================================');
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      
      <Card
        title="Total Police Station"
        value={dashboardInfo?.data?.policeStationCount}
      />
      <Card
        title="Total Users"
        value={dashboardInfo?.data?.userCount}
      />
      <Card
        title="Total Crime Registered"
        value={dashboardInfo?.data?.cimeRegisteredCount}
      />
    </div>
  );
};

export default Grid;

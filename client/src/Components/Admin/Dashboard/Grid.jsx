
import Card from "./Card";

const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      <Card
        title="Total Police Station"
        value="250"
      />
      <Card
        title="Total Users"
        value="1000"
      />
      <Card
        title="Total Crime Registered"
        value="2500"
      />
    </div>
  );
};

export default Grid;

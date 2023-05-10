import Content from "../template/Content";
import SideBar from "../template/SideBar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[--color-gray] p-10">
      <SideBar />
      <Content />
    </div>
  );
};

export default Dashboard;

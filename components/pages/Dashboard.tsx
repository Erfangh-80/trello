import { useSelector } from "react-redux";
import { Modal } from "../organisms/Modal";
import Content from "../template/Content";
import { RootState } from "@/redux/store";

const Dashboard = () => {
  const { isShow } = useSelector((state: RootState) => state.modal);

  return (
    <div className="min-h-screen">
      {isShow ? <Modal /> : null}
      <Content />
    </div>
  );
};

export default Dashboard;

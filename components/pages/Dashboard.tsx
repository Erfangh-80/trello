import { useEffect, useRef } from "react";
import { AppDispatch, RootState } from "@/redux/store";
import { setIsShow } from "@/redux/features/modal/ModalSlice";
import { useDispatch, useSelector } from "react-redux";

import { Modal } from "../organisms/Modal";
import Content from "../template/Content";

const Dashboard = () => {
  const { isShow } = useSelector((state: RootState) => state.modal);
  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        dispatch(setIsShow());
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleOutsideClick);

    // Unbind the event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [modalRef]);

  return (
    <div className="min-h-screen">
      {isShow ? <Modal modalRef={modalRef} /> : null}
      <Content />
    </div>
  );
};

export default Dashboard;

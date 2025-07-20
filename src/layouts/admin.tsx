import "./styles/admin.scss";
import { Outlet } from "react-router-dom"
import Sidebar from "@/components/Sidebar";
import HeaderLayout from "../components/HeaderLayout";

const LayoutAdmin = () => {
  return <>
    <title> Layout Admin</title>
    <div className="layout h-screen">
      <div className="layout__sidebar">
        <Sidebar />
      </div>

      <div className="layout__content w-full">
        <div className="layout__container">
          <HeaderLayout />

          <Outlet />
        </div>
      </div>
    </div>
  </>
}

export default LayoutAdmin;

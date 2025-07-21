import "./styles/admin.scss";
import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar";
import HeaderLayout from "../components/HeaderLayout";
import { type MenuType } from "../types/menu";
import { EMPLOYEE, TASK, MESSAGE } from "../routes/routes.d";

const LayoutAdmin = () => {

  const menuData: MenuType[] = [
    {
      title: 'Manage Employee',
      active: false,
      link: EMPLOYEE
    },
    {
      title: 'Manage Task',
      active: false,
      link: TASK
    },
    {
      title: 'Message',
      active: false,
      link: MESSAGE
    }
  ]


  return <>
    <title> Layout Admin</title>
    <div className="layout h-screen">
      <div className="layout__sidebar">
        <Sidebar menuData={menuData} />
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

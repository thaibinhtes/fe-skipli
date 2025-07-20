import "@/assets/scss/components/sidebar.scss";
import { MenuType } from '@/types/menu';
import { Link } from "react-router-dom";
import { EMPLOYEE, MESSAGE } from "@/routes/routes.d";

const Sidebar = () => {
  let menus: Array<MenuType> = [
    {
      title: 'Manage Employee',
      active: true,
      link: EMPLOYEE
    },
    {
      title: 'Manage Task',
      active: false,
      link: '/task'
    },
    {
      title: 'Message',
      active: false,
      link: MESSAGE
    }
  ]
  return <div className="sidebar">
    <div className="sidebar__container">
      <div className="sidebar__header">
        <div className="sidebar__logo w-full h-[69px] bg-gray">

        </div>
      </div>

      <div className="sidebar__content">
        <nav className="sidebar__nav list">
          {
            menus.map((menu: MenuType, index: number) => {
              return <li key={`menu-${index}`} className="sidebar__item-menu text-center">
                <Link className={`block w-full sidebar__item cursor-pointer ${menu.active ? '--active' : ''}`} to={menu.link}>
                  {menu.title}
                </Link>
              </li>
            })
          }
        </nav>
      </div>
    </div>
  </div >
}

export default Sidebar;

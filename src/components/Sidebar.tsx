import "../assets/scss/components/sidebar.scss";
import { type MenuType } from '../types/menu';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useMemo } from "react";

type SidebarProp = {
  menuData: MenuType[]
}

const Sidebar = ({ menuData }: SidebarProp) => {
  const location = useLocation();

  const menus = useMemo(() => {
    return menuData.map(menu => ({
      ...menu,
      active: location.pathname === menu.link
    }))
  }, [location.pathname]);

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

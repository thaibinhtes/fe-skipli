import "@/assets/scss/components/header-layout.scss";
import { deleteTokenAuth } from "../utils";
import { SIGN_IN } from "../routes/routes.d";
import { useNavigate } from 'react-router-dom';

const HeaderLayout = () => {
  const navigate = useNavigate()
  const onLogout = () => {
    deleteTokenAuth()
    setTimeout(() => {
      navigate(SIGN_IN)
    }, 1000);
  }
  return <header className="header-layout">
    <div className="header-layout__container flex justify-end">
      <ul className="header-layout__menu flex gap-[42px] items-center">
        <li className="header-layout__item-menu">
          <img className="w-[27px]" src="/images/bell.png" alt="bell" />
        </li>

        <li className="header-layout__item-menu relative">
          <button className="button avatar">
            <img src="/images/user.png" alt="user" />
          </button>

          <ul className="header-layout__menu-user menu absolute">
            <li className="header-layout__item-menu cursor-pointer">
              <button onClick={onLogout} className="block w-full cursor-pointer">Logout</button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
}

export default HeaderLayout;
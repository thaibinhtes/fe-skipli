import "@/assets/scss/components/header-layout.scss";

const HeaderLayout = () => {
  return <header className="header-layout">
    <div className="header-layout__container flex justify-end">
      <ul className="header-layout__menu flex gap-[42px] items-center">
        <li className="header-layout__item-menu">
          notifycation
        </li>

        <li className="header-layout__item-menu">
          <button className="button avatar">
            <img src="/images/user.png" alt="user" />
          </button>
        </li>
      </ul>
    </div>
  </header>
}

export default HeaderLayout;
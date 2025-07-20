import './styles/item-message.scss';

const ItemMessage = () => {
  return <div className="item-message">
    <div className="item-message__container flex gap-y-[25px] flex-wrap">
      <div className="item-message__profile flex gap-x-[29px] w-full">
        <div className="item-message__avatar">
          <img src="/images/user.png" alt="user" />
        </div>

        <div className="item-message__name item-message__txt">
          Employee
        </div>
      </div>

      <div className="item-message__content w-full">
        <p className="item-message__txt">
          Message
        </p>
      </div>
    </div>
  </div>
}

export default ItemMessage;

import "@/assets/scss/components/base-modal.scss";

export type BaseModalType = React.ComponentProps<'div'> & {
  title: string;
  show: boolean;
  onClose(): void;
  size?: number;
}
const BaseModal = ({ children, show, title, onClose, size, ...other }: { children: React.ReactNode } & BaseModalType) => {

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  return show ? <div className="base-modal fixed w-full h-full" {...other}>
    <div onClick={handleOverlayClick} className="base-modal__container"
      style={size ? {
        width: `${size}px`
      } : {}}
    >
      <div className="base-modal__header">
        <h4 className="base-modal__title title-modal text-center">
          {title}
        </h4>
      </div>

      <div className="base-modal__content">
        {children}
      </div>
    </div>
  </div> : null
}

export default BaseModal;
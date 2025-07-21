import '@/assets/scss/components/base-card.scss';

export type BaseCardProp = {
  title?: string | undefined;
  desc?: string | TrustedHTML | undefined;
  onBack?: () => void;
}

const BaseCard = ({ children, title, desc, onBack }: { children: React.ReactNode } & BaseCardProp) => {
  return <div className="base-card card">
    <div className="base-card__container">
      {onBack ?
        <div className="base-card__action">
          <button onClick={() => onBack()} className="button base-card__btn font-bold">
            {'<'}
          </button>
        </div>
        : null
      }


      <div className="base-card__header">
        <h3 className="base-card__title title text-center">
          {title || ''}
        </h3>

        <p className="base-card__desc text-center"
          dangerouslySetInnerHTML={{
            __html: desc || ''
          }} />
      </div>

      <div className="base-card__content">
        {children}
      </div>
    </div>
  </div>
}

export default BaseCard;

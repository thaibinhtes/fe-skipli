type BaseIconProps = {
  name: string;
};

const BaseIcon = ({ name }: BaseIconProps) => {
  return (
    <div className="base-icon w-[19px]">
      <img className="w-full" src={`/images/${name}.svg`} alt={name} />
    </div>
  );
};

export default BaseIcon;

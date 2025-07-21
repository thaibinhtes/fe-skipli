import '@/assets/scss/components/base-input.scss';

type BaseInputType = React.ComponentProps<'input'> & {
  label?: string;
  type: string;
  value?: string | null;
  change(value: string | number): void;
  append?: React.ReactNode;
}

const BaseInput = ({ label, type, value, change, append, ...other }: BaseInputType) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    change(e?.target?.value);
  };

  return <div className="base-input w-full">

    {label ? <div className="base-input__label-container">
      <label
        className="base-input__label txt-label block w-full"
      >
        {label}
      </label>
    </div>
      : null}
    <div className="base-input__container flex items-center gap-[5px]">
      {append ? append : null}
      <div className="base-input__wrap">
        <input
          className="w-full input"
          type={type}
          value={value}
          {...other}
          onChange={handleChange}
        />
      </div>
    </div>
  </div>
}

export default BaseInput;
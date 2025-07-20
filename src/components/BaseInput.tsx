import '@/assets/scss/components/base-input.scss';

type BaseInputType = React.ComponentProps<'input'> & {
  label?: string;
  type: string;
  value: string | number;
  onChange(value: string | number): void;
}

const BaseInput = ({ label, type, value, onChange, ...other }: BaseInputType) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e?.target?.value);
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
    <div className="base-input__container">

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
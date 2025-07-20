import { Link } from 'react-router-dom';
import BaseInput from '@/components/BaseInput';
import BaseCard from '@/components/BaseCard';

type FormSignInType = {
  phone: string;
  onChangePhone(phone: string): Function;
  onSubmit(): void;
  onBack(): void;
}

const FormSignInPhone = ({ phone, onChangePhone, onSubmit, onBack }: FormSignInType) => {

  const onChangeValue = (value: string) => {
    onChangePhone(value)
  }

  return <BaseCard
    title="Sign In"
    desc="Please enter your phone to sign in"
    onBack={() => onBack()}
  >
    <div className="form-sign-in">
      <form className="sign-in__form">
        <BaseInput
          type="text"
          value={phone}
          placeholder="Your Phone Number"
          onChange={onChangeValue}
        />

        <button
          className='sign-in__btn w-full button --primary'
          onClick={onSubmit}
        >
          Next
        </button>

        <p className="sign-in__note-txt text-desc text-center">
          passwordless authentication methods.
        </p>
      </form>

      <div className="sign-in__footer">
        <p className="text-desc">
          Don’t having account?
          <Link className='text-link' to="/sign-up"> Sign Up</Link>
        </p>
      </div>
    </div>
  </BaseCard>

}

export default FormSignInPhone;

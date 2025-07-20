import BaseInput from '@/components/BaseInput';
import BaseCard from '@/components/BaseCard';
import { useState } from 'react';
import { useAuthStore } from '../../store/auth';

type PhoneVerifyType = {
  onSubmit(code: string): void;
  onBack(): void;
}

const FormPhoneVerify = ({ onSubmit, onBack }: PhoneVerifyType) => {
  const [code, setCode] = useState('');
  const { getCodePhone } = useAuthStore()

  const onChangeValue = (value: string) => {
    setCode(value)
  }

  const onSubmitCode = () => {
    onSubmit(code)
    getCodePhone(code)
  }


  return <BaseCard
    onBack={() => onBack()}
    title="Phone verification"
    desc="Please enter your code that send<br />to your phone"
  >
    <form className="form-phone-verify">
      <BaseInput
        type="text"
        value={code}
        placeholder="Enter Your Code"
        onChange={onChangeValue}
      />


      <button
        className='sign-in__btn w-full button --primary'
        onClick={onSubmitCode}
      >
        Submit
      </button>

      <p className="sign-in__note-txt text-desc text-center">
        Code not receive?

        <button type='button' className='button p-0 text-link'>Send again</button>
      </p>

    </form>
  </BaseCard>
}

export default FormPhoneVerify;
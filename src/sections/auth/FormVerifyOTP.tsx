import BaseInput from '../../components/BaseInput';
import BaseCard from '../../components/BaseCard';
import { useState } from 'react';
import { type TYPE_SEND_OTP } from '../../services/userService';
import { setTokenAuth } from '../../utils';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/auth'
import BaseLoading from '../../components/BaseLoading';
import { HOME } from '../../routes/routes.d';

type PhoneVerifyType = {
  account: string;
  type: TYPE_SEND_OTP;
  onBack(): void;
}

const FormVerifyOTP = ({ onBack, type, account }: PhoneVerifyType) => {
  const [otp, setOTP] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const { getOTP, sendOTP } = useAuthStore();

  const onChangeValue = (value: string) => {
    setOTP(value)
  }


  const onResendOTP = async () => {
    try {
      setLoading(true)
      await getOTP(account, type)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  const onVerify = async () => {
    try {
      setLoading(true)
      const res = await sendOTP(account, otp)

      if (res.success === true) {
        setTokenAuth(res?.data)
        setTimeout(() => {
          setLoading(false)
          navigate(HOME)
        }, 1000);
      }
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }



  return <div className="form-verify-otp relative">
    <BaseCard
      onBack={() => onBack()}
      title={type === 'email' ? 'Email verification' : 'Phone verification'}
      desc="Please enter your code that send<br />to your phone"
    >
      <div className="form-verify">
        {loading ? <BaseLoading /> : null}
        <BaseInput
          type="text"
          value={otp}
          placeholder="Enter Your Code"
          change={onChangeValue}
        />


        <button
          className='sign-in__btn w-full button --primary'
          onClick={onVerify}
        >
          Submit
        </button>

        <p className="sign-in__note-txt text-desc text-center">
          Code not receive?

          <button disabled={loading} onClick={onResendOTP} type='button' className='button p-0 text-link'>Send again</button>
        </p>

      </div>
    </BaseCard>
  </div>

}

export default FormVerifyOTP;